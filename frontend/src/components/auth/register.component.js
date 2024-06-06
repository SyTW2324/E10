import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../redux/actions/userActions';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerError = useSelector((state) => state.user.error);
  const registerSuccess = useSelector((state) => state.user.user);

  const schema = Yup.object().shape({
    username: Yup.string().required('*El nombre de usuario es requerido'),
    password: Yup.string()
      .required('*La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Las contraseñas deben coincidir',
    ),
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await schema.validate({ username, password, confirmPassword }, { abortEarly: false });
      dispatch(registerUser({ username, password }));
      
      setUsername('');
      setPassword('');
      setConfirmPassword('');
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
    if (registerSuccess) {
      navigate('/registersuccess');
    }
  }, [registerSuccess, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Registrarse</h2>
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
          <div>
            <label htmlFor="confirmPassword" className="block text-white">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              className={`form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
                errors.confirmPassword ? 'border-red-500' : ''
              }`}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 px-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-md hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Registrarse
            </button>
          </div>
          {registerError && <p className="text-red-500 text-sm text-center mt-1">{registerError.message}</p>}
          <div className="mt-4 flex justify-center">
            <p className="text-center text-white">¿Ya tienes cuenta? 
              <Link to="/login" className="text-blue-600 hover:underline ml-1">Iniciar Sesión</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
