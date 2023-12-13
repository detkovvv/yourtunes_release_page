import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from './axiosBaseQuery';

export const releaseAPI = createApi({
    reducerPath: 'releaseAPI',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['Releases'],
    endpoints: (builder) => ({
        getReleases: builder.query({
            query: () => ({ url: '/list', method: 'GET' }),
            providesTags: () => ['Releases'],
        }),
        getAva: builder.query({
            query: (body) => ({ url: '/get_ava', method: 'GET', data: body }),
            providesTags: () => ['Releases'],
        }),
        deleteRelease: builder.mutation({
            query: (body) => ({ url: '/delete', method: 'POST', data: body }),
            invalidatesTags: ['Releases'],
        }),
        updateAva: builder.mutation({
            query: (body) => ({ url: '/update_ava', method: 'POST', data: body }),
            invalidatesTags: ['Releases'],
        }),
        addRelease: builder.mutation({
            query: (body) => ({ url: '/add', method: 'POST', data: body }),
            invalidatesTags: ['Releases'],
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
