import React, { useState } from 'react'
import * as Yup from 'yup'

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/userActions';

import './register.component.css'

export function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch();
  const registerError = useSelector((state) => state.user.error);

  const schema = Yup.object().shape({
    username: Yup.string().required('*El nombre de usuario es requerido'),
    password: Yup.string()
      .required('*La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Las contraseñas deben coincidir',
    ),
  })

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await schema.validate(
        { username, password, confirmPassword },
        { abortEarly: false },
      )

      // Dispatch register action
      dispatch(registerUser({ username, password }));
      
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      setErrors({})
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {}
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message
        })
        setErrors(newErrors)
      } else {
        console.error(error)
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 login-form">
        <form onSubmit={handleSubmit}>
          <div className="register-form">
            <h2 className="register-title log-in-title">Registrarse</h2>
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Nombre de Usuario:
              </label>
              <input
                type="text"
                id="username"
                className={`form-group-input ${
                  errors.username ? 'border-red-500' : ''
                }`}
                value={username}
                onChange={handleUsernameChange}
              />
              {errors.username && (
                <p className="error-message mt-1">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className={`form-group-input ${
                  errors.password ? 'border-red-500' : ''
                }`}
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className="error-message mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirmar Contraseña:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`form-group-input ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {errors.confirmPassword && (
                <p className="error-message mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button type="submit" className="form-group-button">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
