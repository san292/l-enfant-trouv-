import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './createAsyncThunk';

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSucces = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.message = payload;
      state.user = null;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = payload;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.message = payload;
      state.user = null;
    }
  }
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
