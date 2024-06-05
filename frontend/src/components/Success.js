import {React, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export function Success() {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();


  const navigateMusic = () => {
    navigate('/songs');
  };

  useEffect(() => {
    if (!user) {
      // Si el usuario no está autenticado, redirige al formulario de inicio de sesión
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(#2a00b7, #42006c)', height: '100vh'}}>
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center bg-green-10" style={{ display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <h1 className="text-4xl font-bold text-green-800 mb-4">Login exitoso</h1>
          <p className="text-lg text-green-700 mb-4">¡Has iniciado sesión correctamente!</p>
          <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue -700"
              onClick={navigateMusic}
          >
              Ir a la página de canciones
          </button>
      </div>
    </div>
  );
}
