//import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignIn } from './components/auth/login.component'
import { SignUp } from './components/auth/register.component'

function App() {
  return (
    <Router>
      <Routes> {/* Cambio en la etiqueta */}
        <Route path="/login" element={<LoginSignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Otras rutas aquí */}
      </Routes> {/* Cambio en la etiqueta */}
    </Router>
  )
}

export default App
