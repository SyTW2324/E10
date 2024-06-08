import React from "react";
import { Link } from "react-router-dom";
import { MusicalNoteIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4">
        <div className="flex items-center gap-1">
          <MusicalNoteIcon className="w-7 h-7 text-blue-400" />
          <h1 className="text-2xl font-bold cursor-pointer">MusicWiki</h1>
        </div>
        <div className="flex mt-4 md:mt-0">
          <Link to="/signup" className="hover:text-blue-400 duration-500 mx-2 font-semibold">
            Registrarse
          </Link>
          <Link to="/login" className="hover:text-blue-400 duration-500 mx-2 font-semibold">
            Iniciar Sesión
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-500 text-sm pb-4">
        <span>© 2024 MusicWiki. Todos los derechos reservados.</span>
        <span>Términos · Política de Privacidad</span>
        <span>Equipo MusicWiki</span>
      </div>
    </footer>
  );
};

export default Footer;
