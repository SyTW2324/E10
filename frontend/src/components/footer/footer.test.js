// import React from 'react';
// import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Footer from './footer';

// describe('Footer', () => {
//   it.only('renderiza sin errores', () => {
//     render(<Router><Footer /></Router>);
//   });

//   it('muestra el logo correctamente', () => {
//     const { getByText } = render(<Router><Footer /></Router>);
//     expect(getByText('MusicWiki')).toBeInTheDocument();
//   });

//   it('muestra los links de navegacion correctamente', () => {
//     const { getByText } = render(<Router><Footer /></Router>);
//     expect(getByText('Registrarse')).toBeInTheDocument();
//     expect(getByText('Iniciar Sesión')).toBeInTheDocument();
//   });

//   it('muestra la informacion de copyright correctamente', () => {
//     const { getByText } = render(<Router><Footer /></Router>);
//     expect(getByText('© 2024 Appy. Todos los derechos reservados.')).toBeInTheDocument();
//     expect(getByText('Términos · Política de Privacidad')).toBeInTheDocument();
//     expect(getByText('Grupo E10 - Micaela - Carla - Carlos')).toBeInTheDocument();
//   });
// });