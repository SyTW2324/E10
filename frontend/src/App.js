import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignIn } from './components/auth/login.component'
import { SignUp } from './components/auth/register.component'
import { Success } from './components/Success'
import { RegisterSuccess } from './components/RegisterSuccess'

import Home from './components/home/home';
import SongPage from './components/songs/SongPage';
import component from './components';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <component.Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginSignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/success' element ={<Success/>}/>
            <Route path='/registersuccess' element ={<RegisterSuccess/>}/>
            <Route path='/songs' element={<SongPage/>}/>
            <Route path='/' element={<Home />} /> {/* Redirige a home por defecto */}
          </Routes>
        </main>
        <component.Footer />
      </div>
    </Router>
  );
}


export default App;
