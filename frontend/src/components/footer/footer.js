import React from "react";
import { Link } from "react-router-dom";
import { MusicalNoteIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-tropical-indigo text-lavender-web w-full flex flex-col items-center justify-center sticky bottom-0">
      <div className="flex flex-col items-center text-center">
        <Link to="/home" className="font-bold text-2xl cursor-pointer flex items-center text-lavender-web">
          <MusicalNoteIcon className="w-5 h-5 text-lavender-web" />
          MusicWiki
        </Link>
        <div className="flex">
          <Link to="/signup" className="hover:text-ultra-violet duration-500 mx-2 font-semibold">
            Registrarse
          </Link>
          <Link to="/login" className="hover:text-ultra-violet duration-500 mx-2 font-semibold">
            Iniciar Sesión
          </Link>
        </div>
      </div>
      <div className="text-center text-sm">
        <div>© 2024 MusicWiki. Todos los derechos reservados.</div>
        <div>
          Términos · Política de Privacidad
        </div>
        <div>Equipo MusicWiki</div>
      </div>
    </footer>
  );
};

export default Footer;
