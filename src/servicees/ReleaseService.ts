import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from './axiosBaseQuery';

export const releaseAPI = createApi({
    reducerPath: 'releaseAPI',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getReleases: builder.query({
            query: () => ({ url: '/list', method: 'GET' }),
        }),
        getAva: builder.query({
            query: (data) => ({ url: '/get_ava', method: 'GET', body: data }),
        }),
        deleteRelease: builder.mutation({
            query: (data) => ({ url: '/delete', method: 'POST', body: data }),
        }),
        updateAva: builder.mutation({
            query: (data) => ({ url: '/update_ava', method: 'POST', body: data }),
        }),
        addRelease: builder.mutation({
            query: (avatar) => ({ url: '/add', method: 'POST', body: { input_ava: avatar } }),
        }),
    }),
});

export const {
    useGetReleasesQuery,
    useAddReleaseMutation,
    useDeleteReleaseMutation,
    useGetAvaQuery,
    useUpdateAvaMutation,
    endpoints,
} = releaseAPI;
