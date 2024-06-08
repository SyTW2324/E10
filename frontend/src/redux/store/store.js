import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import songReducer from '../reducers/songReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer
  },
});

export default store;
