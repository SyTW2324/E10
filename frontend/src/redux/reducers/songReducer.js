import { createSlice } from '@reduxjs/toolkit';
import { addSong, fetchSongs, updateSongLyrics } from '../actions/songActions';

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
        state.songs = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateSongLyrics.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSongLyrics.fulfilled, (state, action) => {
        state.songs = state.songs.map(song =>
          song._id === action.payload._id ? action.payload : song
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(updateSongLyrics.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default songSlice.reducer;
