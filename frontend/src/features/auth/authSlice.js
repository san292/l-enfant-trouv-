import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './createAsyncThunk';
import { toast } from 'react-toastify';
import { verifyEmail } from '../user/userThunk';

const initialState = {
  user: [],
  isLoading: false,
  msg: '',
  userName: localStorage.getItem('username') || 'mounie'
};
console.log('locastorage', localStorage.getItem('userName'));
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.message = '';
    },
    displayName: (state, action) => {
      state.userName = localStorage.setItem('username', action.payload);
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.success(msg);
      state.user = payload;
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.user = null;
      const { msg } = payload;
      toast.error(msg);
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { msg } = payload;
      toast.success(msg);
      state.user = payload;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      const { msg } = payload;
      toast.error(msg);
      state.user = null;
    },
    [verifyEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyEmail.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [verifyEmail.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.error(msg);
    }
  }
});
export const { reset, displayName, logout } = authSlice.actions;
export default authSlice.reducer;
