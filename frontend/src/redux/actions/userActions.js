import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Definir la URL base del backend
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

// Acción para registrar un usuario
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/register`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Acción para iniciar sesión
export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Acción para cerrar sesión
export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    // Aquí podrías realizar cualquier limpieza necesaria, como invalidar un token en el backend
    return true;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});