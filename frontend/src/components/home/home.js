import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenido a MusicWiki</h1>
        <p className="text-gray-300 text-lg mb-6">
          Explora un vasto mundo de información sobre tus canciones favoritas. Únete a nuestra comunidad para descubrir nuevas músicas y compartir tus propios descubrimientos musicales. ¡Sumérgete en el universo musical con nosotros!
        </p>
        <div className="flex flex-col space-y-4">
          <Link to="/login">
            <button className="w-full py-2 px-3 bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar Sesión
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full py-2 px-3 bg-gradient-to-b from-green-600 to-green-800 text-white rounded-md hover:from-green-700 hover:to-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
