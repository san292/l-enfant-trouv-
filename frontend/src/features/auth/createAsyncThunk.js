import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
   
    try {
      return await authService.register(user);
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const login = createAsyncThunk('auth/Login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.log(error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
