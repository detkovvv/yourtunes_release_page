import { combineReducers, configureStore } from '@reduxjs/toolkit';

import releasesReducer from './reducers/ReleasesSlise';

const rootReducer = combineReducers({
    releasesReducer,
});

export const store = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
