import { configureStore } from '@reduxjs/toolkit';

import { releasesSlice } from './slice/releases';

export const store = configureStore({
    reducer: {
        releases: releasesSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
