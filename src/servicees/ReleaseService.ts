import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const releaseAPI = createApi({
    reducerPath: 'releaseAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-api-v2.yourtunes.net/api/v2' }),
    endpoints: (build) => ({
        fetchAllReleases: build.query({
            query: () => ({
                url: '/release/list',
            }),
        }),
    }),
});
