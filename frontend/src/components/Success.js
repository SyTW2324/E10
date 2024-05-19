import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/userActions';

export function Success() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center bg-green-10">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Login exitoso</h1>
        <p className="text-lg text-green-700 mb-4">¡Has iniciado sesión correctamente!</p>
        <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={handleLogout}
        >
            Log Out
        </button>
    </div>
  );
}
