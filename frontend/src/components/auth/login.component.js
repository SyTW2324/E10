import React, { useState } from 'react'
import * as Yup from 'yup'

import { Link } from 'react-router-dom'
import './login.component.css'

export function LoginSignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const schema = Yup.object().shape({
    username: Yup.string().required('*El nombre de usuario es requerido'),
    password: Yup.string().required('*La contraseña es requerida'),
  })

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await schema.validate({ username, password }, { abortEarly: false })
      console.log('Username:', username)
      console.log('Password:', password)
      
      setUsername('')
      setPassword('')
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={handleSubmit}>
          <div className="login-form ">
            <h2 className="log-in-title">Log In</h2>
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
            <div className="flex justify-center">
              <button type="submit" className="form-group-button ">
                Iniciar Sesión
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="flex justify-center items-center w-full max-w-md">
                <p>¿No tienes cuenta?</p>
                <Link to="/signup" className="form-group-button">
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
