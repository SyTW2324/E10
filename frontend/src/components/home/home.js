import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lavender-web">
      <div className="max-w-md w-full space-y-8 bg-tropical-indigo p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-ultra-violet mb-4">Bienvenido a MusicWiki</h1>
        <p className="text-lavender-web text-lg mb-6">
          Explora un vasto mundo de información sobre tus canciones favoritas. Únete a nuestra comunidad para descubrir nuevas músicas y compartir tus propios descubrimientos musicales. ¡Sumérgete en el universo musical con nosotros!
        </p>
        <div className="flex flex-col space-y-4">
          <Link to="/login">
            <button className="w-full py-2 px-3 bg-ultra hover:bg-ultra-violet text-lavender-web rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ultra-violet">
              Iniciar Sesión
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full py-2 px-3 bg-ultra hover:bg-ultra-violet text-lavender-web rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ultra-violet">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
