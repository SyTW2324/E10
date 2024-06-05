//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignIn } from './components/auth/login.component'
import { SignUp } from './components/auth/register.component'
import { Success } from './components/Success'
import { RegisterSuccess } from './components/RegisterSuccess'

import component from './components';
import Home from './components/home/home';
import SongPage from './components/songs/SongPage';



function App() {
  return (
    <>
    <Router>
    <component.Header />
      <Routes> 
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginSignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/success' element ={<Success/>}/>
        <Route path='/registersuccess' element ={<RegisterSuccess/>}/>
        <Route path='/songs' element={<SongPage/>}/>
        <Route path='/' element={<Home />} /> {/* Redirige a login por defecto */}
      </Routes>
    <component.Footer />
    </Router>
    </>
  )
}

export default App
