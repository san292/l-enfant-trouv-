import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import { getAllUsers } from '../api/getAllUsers';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[getAllUsers.reducerPath]: getAllUsers.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(getAllUsers.middleware),
});
