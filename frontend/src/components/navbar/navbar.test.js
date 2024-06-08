// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './navbar.component';

// describe('Header tests', () => {
//   it.only('renderiza sin errores', () => {
//     render(<Router><Header /></Router>);
//   });

//   it('muestra el logo correctamente', () => {
//     const { getByText } = render(<Router><Header /></Router>);
//     expect(getByText('MusicWiki')).toBeInTheDocument();
//   });

//   it('muestra los links de navegacion correctamente', () => {
//     const { getByText } = render(<Router><Header /></Router>);
//     expect(getByText('Registrarse')).toBeInTheDocument();
//     expect(getByText('Iniciar Sesión')).toBeInTheDocument();
//   });

//   it('comprueba el correcto mostrado de los links cuando se pulsa un enlace', () => {
//     const { getByRole, queryByText } = render(<Router><Header /></Router>);
//     const menuIcon = getByRole('button');
//     fireEvent.click(menuIcon);
//     expect(queryByText('Registrarse')).toBeVisible();
//     expect(queryByText('Iniciar Sesión')).toBeVisible();
//   });
// });