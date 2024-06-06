import React, { useEffect } from 'react';
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
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Login exitoso</h1>
        <p className="text-gray-300 text-lg mb-6">¡Has iniciado sesión correctamente!</p>
        <button className="w-full py-2 px-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={navigateMusic}>
          Ir a la página de canciones
        </button>
      </div>
    </div>
  );
}
