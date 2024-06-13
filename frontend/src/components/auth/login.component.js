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
    <div className="min-h-screen flex items-center justify-center bg-lavender-web">
      <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg text-center bg-tropical-indigo text-ultra-violet">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-ultra-violet">Nombre de Usuario:</label>
            <input
              type="text"
              id="username"
              className={`form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                errors.username ? 'border-cardinal' : ''
              }`}
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && <p className="text-cardinal text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-ultra-violet">Contraseña:</label>
            <input
              type="password"
              id="password"
              className={`form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                errors.password ? 'border-cardinal' : ''
              }`}
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <p className="text-cardinal text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 px-4 bg-ultra hover:bg-ultra-violet text-lavender-web rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Iniciar Sesión
            </button>
          </div>
          {loginError && <p className="text-cardinal text-sm text-center mt-1">{loginError.message}</p>}
          <div className="mt-4 flex justify-center">
            <p className="text-center text-white">¿No tienes cuenta? 
              <Link to="/signup" className="text-ultra-violet hover:underline ml-1">Registrarse</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
