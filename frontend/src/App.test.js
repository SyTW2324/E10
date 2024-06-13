import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/reducers/userReducer';
import App from './App';

describe('App tests', () => {

    const store = configureStore({
        reducer: {
          user: userReducer
        }
    });

    it('renderiza sin errores', () => {
        render(
          <Provider store={store}>
            <App />
          </Provider>
        );
    });

    it('navigates to /login when its link is clicked', async () => {
        const { getAllByText } = render(
          <Provider store={store}>
            <App />
          </Provider>
        );

        const loginLinks = getAllByText(/Iniciar Sesión/i); // adjust this to select the correct link
        fireEvent.click(loginLinks[0]);

        await waitFor(() => {
            expect(window.location.pathname).toBe('/login');
        });
    });
});