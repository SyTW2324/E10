import React from 'react';
import { Link } from 'react-router-dom';

export function RegisterSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-800 to-purple-900">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Registro exitoso</h1>
        <p className="text-lg text-green-700 mb-4">¡Te has registrado correctamente!</p>
        <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Ir al Log In
        </Link>
      </div>
    </div>
  );
}
