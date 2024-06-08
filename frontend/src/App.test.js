// import React from 'react';
// import { render, fireEvent, getAllByText} from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import {MemoryRouter as Router} from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './redux/reducers/userReducer';
// import App from './App';

// describe('App tests', () => {

//   let store;

//   beforeEach(() => {
//     store = configureStore({
//       reducer: userReducer,
//     });
//   });

//   it('renderiza sin errores', () => {
//     render(<App />);
//   });

//   it.only('navigates to /login when its link is clicked', async () => {
//     const history = createMemoryHistory();
//     const { getAllByText } = render(
//       <Provider store={store}> 
//         <App initialEntries={['/']} initialIndex={0} history={history}/>
//       </Provider>
//     );
  
//     const loginLinks = getAllByText(/Iniciar Sesión/i);
//     fireEvent.click(loginLinks[0]);
  
//     expect(history.location.pathname).toBe('/login');
//     });

//   it('navigates to /signup when its link is clicked', async () => {
//     const history = createMemoryHistory();
//     history.push('/signup');
//     render(
//       <Provider store={store}>
//         <Router history={history}>
//           <App />
//         </Router>
//       </Provider>
//     );
//     expect(screen.getByText(/signup component content/i)).toBeInTheDocument();
//   });
// });