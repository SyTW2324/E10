import React from 'react';

export function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Login Exitoso</h1>
        <p className="text-lg text-green-700">¡Has iniciado sesión correctamente!</p>
      </div>
    </div>
  );
}
