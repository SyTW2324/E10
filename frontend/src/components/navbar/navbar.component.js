import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon, MusicalNoteIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(logoutUser());
        navigate('/login'); // Redirige al usuario al formulario de inicio de sesión
    };

    let Links = user
      ? [{ name: "Logout", onClick:{handleLogout} }] // Si el usuario está autenticado, muestra el enlace de logout
      : [ // Si el usuario no está autenticado, muestra los enlaces de registro e inicio de sesión
          { name: "Registrarse", link: "/signup" },
          { name: "Iniciar Sesión", link: "/login" },
        ];
  ;
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <Link to="/home" className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <MusicalNoteIcon className='w-7 h-7 text-blue-600' />
                    <span>MusicWiki</span>
                </Link>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
                                <Link to={link.link} onClick={link.onClick} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                            </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;
