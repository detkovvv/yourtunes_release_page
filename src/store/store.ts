import { combineReducers, configureStore } from '@reduxjs/toolkit';

import releasesReducer from './reducers/ReleasesSlice';
import { releaseAPI } from '../servicees/ReleaseService';

const rootReducer = combineReducers({
    releasesReducer,
    [releaseAPI.reducerPath]: releaseAPI.reducer,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(releaseAPI.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
