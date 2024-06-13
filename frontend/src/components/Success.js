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
    <div className="flex flex-col items-center justify-center min-h-screen bg-lavender-web">
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg text-center bg-tropical-indigo text-lavender-web">
        <h1 className="text-4xl font-bold text-lavender-web mb-4">Login exitoso</h1>
        <p className="text-lavender-web text-lg mb-6">¡Has iniciado sesión correctamente!</p>
        <button className="w-full py-2 px-4 bg-ultra hover:bg-ultra-violet text-lavander-web rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ultra-violet" onClick={navigateMusic}>
          Ir a la página de canciones
        </button>
      </div>
    </div>
  );
}
