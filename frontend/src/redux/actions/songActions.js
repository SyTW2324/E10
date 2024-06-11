import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// 'https://musicwiki-b09c03390eba.herokuapp.com'
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
      const response = await axios.get(`${BASE_URL}/api/songs`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Nueva acción para actualizar la letra de una canción
export const updateSongLyrics = createAsyncThunk(
  'song/updateSongLyrics',
  async ({ id, lyrics }, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/songs/${id}`, { lyrics });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
