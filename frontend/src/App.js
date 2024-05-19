//import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignIn } from './components/auth/login.component'
import { SignUp } from './components/auth/register.component'
import {Success} from './components/Success'

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/login" element={<LoginSignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/success' element ={<Success/>}/>
        <Route path="/" component={<LoginSignIn />} /> {/* Redirige a login por defecto */}
      </Routes> 
    </Router>
  )
}

export default App
