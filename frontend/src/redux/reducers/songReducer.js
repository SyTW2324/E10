import { createSlice } from '@reduxjs/toolkit';
import { addSong,fetchSongs } from '../actions/songActions';

const initialState = {
  song: null,
  songs: [],
  error: null,
  loading: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSong.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSong.fulfilled, (state, action) => {
        state.song = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addSong.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.songs = action.payload; // Almacena las canciones recuperadas en el estado
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default songSlice.reducer;