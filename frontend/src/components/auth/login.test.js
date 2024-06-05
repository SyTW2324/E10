import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {LoginSignIn} from './login.component'; 
import { waitFor } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import * as Yup from 'yup';

describe('Login tests', () => {

  const mockStore = configureMockStore();
  const store = mockStore({
    user: {
      error: null,
      user: null,
    },
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('renderiza sin errores', () => {
    render(<Provider store={store}><Router><LoginSignIn /></Router></Provider>);
  });

  it('maneja el envio de la informacion del formulario', async () => {
  
    const { getByLabelText, getByText } = render(<Provider store={store}><Router><LoginSignIn /></Router></Provider>);
    fireEvent.change(getByLabelText('Nombre de Usuario:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Contraseña:'), { target: { value: 'testpass' } });
    fireEvent.click(getByText('Iniciar Sesión'));
  
    // Wait for the loginUser action to be dispatched
    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual({ type: 'user/login', payload: { username: 'testuser', password: 'testpass' } });
    });
  });
});
