import React from 'react';

import { Link } from 'react-router-dom'

export function RegisterSuccess() {

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center bg-green-10">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Registro exitoso</h1>
        <p className="text-lg text-green-700 mb-4">¡Te has registrado correctamente!</p>
        <div className="mt-4 flex justify-center">
              <div className="flex justify-center items-center w-full max-w-md">
                <Link to="/login"  className="rounded hover:bg-blue-700 text-center mt-2 form-group-button">
                  Ir al Log In
                </Link>
              </div>
            </div>
    </div>
  );
}
