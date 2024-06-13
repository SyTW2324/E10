import React from 'react';
import { act } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../redux/reducers/userReducer';
import { SignUp } from './register.component';
import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Registro de usuario', () => {
    it('envio de formulario correcto', async () => {
        const store = configureStore({
            reducer: {
              user: userReducer,
            },
            preloadedState: {
              user: {
                username: 'testuser',
                password: 'testpass',
              },
            },
        });

        const { getByLabelText, getByRole } = render(
            <Provider store={store}>
                <Router>
                    <SignUp />
                </Router>
            </Provider>
        );
        const usernameInput = getByLabelText(/Nombre de Usuario:/i);
        const passwordInput = getByLabelText(/Contraseña:/i, { selector: 'input[id="password"]' });
        const confirmPasswordInput = getByLabelText(/Confirmar Contraseña:/i, { selector: 'input[id="confirmPassword"]' });
        const submitButton = getByRole('button', { name: /Registrarse/i });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'testpass' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'testpass' } });

        fireEvent.click(submitButton);

        store.dispatch({
            type: 'REGISTER_USER',
            payload: {
              username: 'testuser',
              password: 'testpass',
            },
        });

        await waitFor(() => {
            expect(store.getState().user).toEqual({
              username: 'testuser',
              password: 'testpass',
            });
        });
    });

    it('el formulario da errores de envio cuando los datos no son correctos', async () => {
        const store = configureStore({
            reducer: {
              user: userReducer,
            },
            preloadedState: {
              user: {
                username: '',
                password: 'corta',
              },
            },
        });

        const { getByLabelText, getByRole ,findByText } = render(
            <Provider store={store}>
                <Router>
                    <SignUp />
                </Router>
            </Provider>
        );
        const usernameInput = getByLabelText(/Nombre de Usuario:/i);
        const passwordInput = getByLabelText(/Contraseña:/i, { selector: 'input[id="password"]' });
        const confirmPasswordInput = getByLabelText(/Confirmar Contraseña:/i, { selector: 'input[id="confirmPassword"]' });
        const submitButton = getByRole('button', { name: /Registrarse/i });

        fireEvent.change(usernameInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: 'corta' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'mismatch' } });

        fireEvent.click(submitButton);

        store.dispatch({
            type: 'REGISTER_USER',
            payload: {
              username: '',
              password: 'corta',
            },
        });
    
        // Comprobacion de los errores de validacion
        expect(await findByText(/El nombre de usuario es requerido/i)).toBeInTheDocument();
        expect(await findByText(/La contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument();
        expect(await findByText(/Las contraseñas deben coincidir/i)).toBeInTheDocument();
    });
});
