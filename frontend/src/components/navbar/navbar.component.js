import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/login');
  };

  const Links = user
    ? [{ name: "Logout", onClick: handleLogout }]
    : [
        { name: "Registrarse", link: "/signup" },
        { name: "Iniciar Sesión", link: "/login" },
      ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-tropical-indigo text-lavender-web">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <Link to="/home" className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-lavender-web">
          <MusicalNoteIcon className="w-7 h-7 text-lavender-web" />
          MusicWiki
        </Link>
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-tropical-indigo md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-4">
              {link.link ? (
                <Link to={link.link} className="hover:text-ultra-violet">
                  {link.name}
                </Link>
              ) : (
                <button onClick={link.onClick} className="hover:text-ultra-violet">
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
