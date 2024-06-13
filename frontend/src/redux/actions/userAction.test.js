import axios from 'axios';
import { registerUser, loginUser, logoutUser } from './userActions';

jest.mock('axios');


describe('userActions', () => {
  const BASE_URL = 'https://musicwiki-b09c03390eba.herokuapp.com';
  const dispatch = jest.fn();
  const getState = jest.fn();
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches registerUser action and returns data on success', async () => {
    const expectedData = { data: 'data' };
    const userData = { username: 'test', password: 'test' };

    // Mock the post method of axios
    axios.post.mockResolvedValueOnce({ data: expectedData });

    await registerUser(userData)(dispatch, getState, {});

    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/api/register`, userData);
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'user/register/pending' }));
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'user/register/fulfilled', payload: expectedData }));
  });

  it('dispatches loginUser action and returns data on success', async () => {
    const mockData = { token: '123' };
    const userData = { username: 'test', password: 'test' };

    axios.post.mockResolvedValueOnce({ data: mockData });

    await loginUser(userData)(dispatch, getState, {});

    expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/api/login`, userData);
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'user/login/pending' }));
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'user/login/fulfilled', payload: mockData }));
  });

  it('dispatches logoutUser action and returns data on success', async () => {
    const userData = { username: 'test', password: 'test' };

    await logoutUser()(dispatch, getState, {});

    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'user/logout/pending' }));
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'user/logout/fulfilled', payload: true }));
  });
});