import { createAsyncThunk } from '@reduxjs/toolkit';
import customFecth from '../../utils/axios';

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (user, thunkAPI) => {
		try {
			const { data } = await customFecth.post('/auth/register', user);
			return data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);
export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (user, thunkAPI) => {
		try {
			const { data } = await customFecth.post('/auth/login', user);

			return data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const verifyEmail = createAsyncThunk(
	'user/verifyEmail',
	async (user, thunkAPI) => {
		console.log(user);
		try {
			const res = await customFecth.post('/auth/verify-email', user);
			console.log(res);
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);
