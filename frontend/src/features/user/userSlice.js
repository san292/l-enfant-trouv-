import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './userThunk';
import { toast } from 'react-toastify';

const initialState = {
	isLoading: false,
	msg: '',
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
			console.log(payload);
			const { msg } = payload;
			state.isLoading = false;

			toast.success(msg);
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			console.log(payload);
			const { user } = payload;

			state.isLoading = false;
			state.user = user;
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;

			console.log(payload);
		},
	},
});

export default userSlice.reducer;
