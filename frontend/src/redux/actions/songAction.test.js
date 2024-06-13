import axios from 'axios';
import { addSong, fetchSongs, updateSongLyrics } from './songActions';

jest.mock('axios');

describe('songActions', () => {
  const BASE_URL = 'https://musicwiki-b09c03390eba.herokuapp.com';
  const dispatch = jest.fn();
  const getState = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches addSong action and returns data on success', async () => {
    const song = { name: 'Test Song', author: 'Test Author' };
    axios.post.mockResolvedValueOnce({ data: song });

    await addSong(song)(dispatch, getState, {});

    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/api/songs`, song);
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'song/addSong/pending' }));
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'song/addSong/fulfilled', payload: song }));
  });

  it('dispatches fetchSongs action and returns data on success', async () => {
    const songs = [{ name: 'Test Song', author: 'Test Author' }];
    axios.get.mockResolvedValueOnce({ data: songs });

    await fetchSongs()(dispatch, getState, {});

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/api/songs`);
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'songs/fetchSongs/pending' }));
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'songs/fetchSongs/fulfilled', payload: songs }));
  });

  it('dispatches updateSongLyrics action and returns data on success', async () => {
    const song = { id: '1', lyrics: 'Test Lyrics' };
    axios.put.mockResolvedValueOnce({ data: song });

    await updateSongLyrics(song)(dispatch, getState, {});

    expect(axios.put).toHaveBeenCalledWith(`${BASE_URL}/api/songs/${song.id}`, { lyrics: song.lyrics });
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'song/updateSongLyrics/pending' }));
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'song/updateSongLyrics/fulfilled', payload: song }));
  });
});