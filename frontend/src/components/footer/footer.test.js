import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react';
import { Provider } from 'react-redux';
import userReducer from '../../redux/reducers/userReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Footer from './footer';
import '@testing-library/jest-dom';


const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });

describe('Footer', () => {
  it('renderiza sin errores', () => {
    render(
        <Provider store={store}>
          <Router>
            <Footer />
          </Router>
        </Provider>
      );
  });

  it('muestra el logo correctamente', () => {
    const { getByText } = render(
        <Provider store={store}>
          <Router>
            <Footer />
          </Router>
        </Provider>
      );
    expect(getByText('MusicWiki')).toBeInTheDocument();
  });

  it('muestra los links de navegacion correctamente', () => {
    const { getByText } = render(
        <Provider store={store}>
          <Router>
            <Footer />
          </Router>
        </Provider>
      );
    expect(getByText('Registrarse')).toBeInTheDocument();
    expect(getByText('Iniciar Sesión')).toBeInTheDocument();
  });

  it('muestra la informacion de copyright correctamente', () => {
    const { getByText } = render(
        <Provider store={store}>
          <Router>
            <Footer />
          </Router>
        </Provider>
      );
    expect(getByText('© 2024 MusicWiki. Todos los derechos reservados.')).toBeInTheDocument();
    expect(getByText('Términos · Política de Privacidad')).toBeInTheDocument();
    expect(getByText('Equipo MusicWiki')).toBeInTheDocument();
  });
});