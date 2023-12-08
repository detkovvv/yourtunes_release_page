import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { releaseAPI } from '../servicees/ReleaseService';

const rootReducer = combineReducers({
    [releaseAPI.reducerPath]: releaseAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(releaseAPI.middleware),
    });
};

export const store = setupStore();
export type RootState = { [releaseAPI.reducerPath]: ReturnType<typeof releaseAPI.reducer> };
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
