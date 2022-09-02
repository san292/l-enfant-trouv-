import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/userSlice';
import { getAllUsers } from '../api/getAllUsers';

export const store = configureStore({
	reducer: {
		user: userReducer,
		[getAllUsers.reducerPath]: getAllUsers.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(getAllUsers.middleware),
});
