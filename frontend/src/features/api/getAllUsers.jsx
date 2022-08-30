import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getAllUsers = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({ baseUrl: '/api/v1' }),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => '/users',
		}),
	}),
});


export const { useGetUsersQuery } = getAllUsers;
