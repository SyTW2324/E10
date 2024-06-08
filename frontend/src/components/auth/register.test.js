// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../../redux/reducers/userReducer';
// import { SignUp } from './register.component';

// describe('Registro de usuario', () => {
//     it.only('envio de formulario correcto', async () => {
//     const store = configureStore({
//         reducer: {
//         user: userReducer
//         }
//     });

//     const { getByLabelText, getByRole } = render(
//         <Provider store={store}>
//         <SignUp />
//         </Provider>
//     );

//     const usernameInput = getByLabelText(/Nombre de Usuario:/i);
//     const passwordInput = getByLabelText(/Contraseña:/i);
//     const confirmPasswordInput = getByLabelText(/Confirmar Contraseña:/i);
//     const submitButton = getByRole('button', { name: /Registrarse/i });

//     fireEvent.change(usernameInput, { target: { value: 'testuser' } });
//     fireEvent.change(passwordInput, { target: { value: 'testpass' } });
//     fireEvent.change(confirmPasswordInput, { target: { value: 'testpass' } });

//     fireEvent.click(submitButton);

//     await waitFor(() => {
//         expect(store.getState().user).toEqual({
//         username: 'testuser',
//         password: 'testpass',
//         });
//     });

//     it('el formulario da errores de envio cuando los datos no son correctos', async () => {
//         const store = configureStore({
//         reducer: {
//             user: userReducer
//         }
//         });
    
//         const { getByLabelText, getByRole, findByText } = render(
//         <Provider store={store}>
//             <SignUp />
//         </Provider>
//         );
    
//         const usernameInput = getByLabelText(/Nombre de Usuario:/i);
//         const passwordInput = getByLabelText(/Contraseña:/i);
//         const confirmPasswordInput = getByLabelText(/Confirmar Contraseña:/i);
//         const submitButton = getByRole('button', { name: /Registrarse/i });
    
//         // Simulacion de un envio de formulario con datos invalidos
//         fireEvent.change(usernameInput, { target: { value: '' } }); // no hay nombre de usuario
//         fireEvent.change(passwordInput, { target: { value: 'short' } }); // la contraseña tiene menos de 6 caracteres
//         fireEvent.change(confirmPasswordInput, { target: { value: 'mismatch' } }); // las dos contraseñas no coinciden
    
//         fireEvent.click(submitButton);
    
//         // Comprobacion de los errores de validacion
//         expect(await findByText(/El nombre de usuario es requerido/i)).toBeInTheDocument();
//         expect(await findByText(/La contraseña debe tener al menos 6 caracteres/i)).toBeInTheDocument();
//         expect(await findByText(/Las contraseñas deben coincidir/i)).toBeInTheDocument();
//     });
//     });
// });
