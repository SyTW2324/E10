import React from 'react';
import { act } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './navbar.component';
import userReducer from '../../redux/reducers/userReducer';
import '@testing-library/jest-dom';

const store = configureStore({
    reducer: {
      user: userReducer,
    },
});

describe('Header tests', () => {
  it('renderiza sin errores', () => {
    render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );
  });

  it('muestra el logo correctamente', () => {
    const { getByText } = render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );
    expect(getByText('MusicWiki')).toBeInTheDocument();
  });

  it('muestra los links de navegacion correctamente', () => {
    const { getByText } = render(
        <Provider store={store}>
          <Router>
            <Header />
          </Router>
        </Provider>
      );
    expect(getByText('Registrarse')).toBeInTheDocument();
    expect(getByText('Iniciar Sesión')).toBeInTheDocument();
  });
});