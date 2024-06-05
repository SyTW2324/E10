import React from "react";
import { Link } from "react-router-dom";
import { MusicalNoteIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 shadow-md">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
        <div className="flex items-center gap-1">
          <MusicalNoteIcon className="w-7 h-7 text-blue-600" />
          <h1 className="text-2xl font-bold cursor-pointer">MusicWiki</h1>
        </div>
        <div className="flex mt-4 md:mt-0">
          <Link to="/signup" className="text-gray-800 hover:text-blue-400 duration-500 mx-2 font-semibold">
            Registrarse
          </Link>
          <Link to="/login" className="text-gray-800 hover:text-blue-400 duration-500 mx-2 font-semibold">
            Iniciar Sesión
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-500 text-sm pb-8">
        <span>© 2024 Appy. Todos los derechos reservados.</span>
        <span>Términos · Política de Privacidad</span>
        <span>Grupo E10 - Micaela - Carla - Carlos</span>
      </div>
    </footer>
  );
};

export default Footer;
