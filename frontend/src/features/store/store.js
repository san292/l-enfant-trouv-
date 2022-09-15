import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/userSlice';
import authReducer from '../auth/authSlice';
import { getAllUsers } from '../api/getAllUsers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    [getAllUsers.reducerPath]: getAllUsers.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllUsers.middleware)
});
