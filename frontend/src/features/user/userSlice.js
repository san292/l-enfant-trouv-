import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, verifyEmail } from './userThunk';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  msg: '',
  user: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.success(msg);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      const { msg } = payload;
      toast.error(msg);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user, msg } = payload;
      console.log(user);
      state.user = user;
      state.isLoading = false;
      toast.success(`Hello ${user.name}, ${msg}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      const { msg } = payload;
      state.isLoading = false;
      toast.error(msg);
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

export default userSlice.reducer;
