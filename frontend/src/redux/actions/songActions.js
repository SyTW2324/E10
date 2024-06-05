import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const addSong = createAsyncThunk(
  'song/addSong',
  async (song, thunkAPI) => {
    console.log(song);
    try {
      const response = await axios.post(`${BASE_URL}/api/songs`, song);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSongs = createAsyncThunk(
  'songs/fetchSongs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/songs`); // Asegúrate de reemplazar '/api/songs' con la ruta correcta de tu API
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);