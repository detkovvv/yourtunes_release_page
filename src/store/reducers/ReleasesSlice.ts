import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { fetchReleases } from './ActionCreators';

export interface IRelease {
    created_at: string;
    updated_at: string;
    uid: string;
    upc: string;
    ava_short_link: string;
    ava_link: string;
    name: string;
    main_singers: string[];
    type: string;
    public_date: string;
    status: number;
    code: string;
    questions_adit: null | string;
    deleted_status_date: null | string;
}

export interface IReleasesState {
    releases: IRelease[];
    isLoading: boolean;
    error: string;
}

const initialState: IReleasesState = {
    releases: [],
    isLoading: false,
    error: '',
};

export const releasesSlice = createSlice({
    name: 'releases',
    initialState,
    reducers: {
        [fetchReleases.fulfilled.type]: (
            state: { isLoading: boolean; error: string; releases: IRelease[] },
            action: PayloadAction<IRelease[]>,
        ) => {
            state.isLoading = false;
            state.error = '';
            state.releases = action.payload;
        },
        [fetchReleases.pending.type]: (state: { isLoading: boolean }) => {
            state.isLoading = true;
        },
        [fetchReleases.rejected.type]: (
            state: { isLoading: boolean; error: string },
            action: PayloadAction<string>,
        ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default releasesSlice.reducer;
