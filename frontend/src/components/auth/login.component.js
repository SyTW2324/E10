import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { Link, useNavigate } from 'react-router-dom';

export function LoginSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.user.error);
  const loginSuccess = useSelector((state) => state.user.user);

  const schema = Yup.object().shape({
    username: Yup.string().required('*El nombre de usuario es requerido'),
    password: Yup.string().required('*La contraseña es requerida'),
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate({ username, password }, { abortEarly: false });
      dispatch(loginUser({ username, password }));
      
      setUsername('');
      setPassword('');
      setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate('/success');
    }
  }, [loginSuccess, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Iniciar Sesion</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-white">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              className={`form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                errors.username ? 'border-red-500' : ''
              }`}
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-white">Contraseña:</label>
            <input
              type="password"
              id="password"
              className={`form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                errors.password ? 'border-red-500' : ''
              }`}
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 px-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar Sesión
            </button>
          </div>
          {loginError && <p className="text-red-500 text-sm text-center mt-1">{loginError.message}</p>}
          <div className="mt-4 flex justify-center">
            <p className="text-center text-white">¿No tienes cuenta? 
              <Link to="/signup" className="text-blue-600 hover:underline ml-1">Registrarse</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
