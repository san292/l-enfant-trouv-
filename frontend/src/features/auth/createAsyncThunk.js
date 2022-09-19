import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
<<<<<<< HEAD
   
=======
>>>>>>> d76135dfc9fa0705719d0710b94421246de6776b
    try {
      return await authService.register(user);
    } catch (error) {
      console.log('errrrrror', error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Login User
export const login = createAsyncThunk('auth/Login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// verifyEmail
export const verifyEmail = createAsyncThunk(
  'user/verifyEmail',
  async (user, thunkAPI) => {
    console.log('user', user);
    try {
      return await authService.verifyEmail(user);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
