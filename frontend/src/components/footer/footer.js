import React from "react";
import { Link } from "react-router-dom";
import { MusicalNoteIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-tropical-indigo text-lavender-web py-6 w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center gap-4 mb-4">
        <Link to="/home" className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-lavender-web">
          <MusicalNoteIcon className="w-7 h-7 text-lavender-web" />
          MusicWiki
        </Link>
        <div className="flex mt-4">
          <Link to="/signup" className="hover:text-ultra-violet duration-500 mx-2 font-semibold">
            Registrarse
          </Link>
          <Link to="/login" className="hover:text-ultra-violet duration-500 mx-2 font-semibold">
            Iniciar Sesión
          </Link>
        </div>
      </div>
      <div className="text-center text-sm space-y-2">
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
