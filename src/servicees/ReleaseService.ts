import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from './axiosBaseQuery';

export const releaseAPI = createApi({
    reducerPath: 'releaseAPI',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getReleases: builder.query({
            query: () => ({ url: '/list', method: 'get' }),
        }),
    }),
});

export const { useGetReleasesQuery, endpoints } = releaseAPI;
