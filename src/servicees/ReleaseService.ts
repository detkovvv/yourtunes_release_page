import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery, axiosInstance, url } from './../utils/axios/index';

export const releaseAPI = createApi({
    reducerPath: 'releaseAPI',
    baseQuery: axiosBaseQuery({ baseUrl: url }),
    endpoints: (builder) => ({
        getReleases: builder.query({
            queryFn: async () => {
                try {
                    const response = await axiosInstance('/list');
                    return { result: await response.data };
                } catch (e) {
                    return { error: e.message };
                }
            },
        }),
    }),
});
