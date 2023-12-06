import { createSlice } from '@reduxjs/toolkit';

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
}

const initialState: IReleasesState = {
    releases: [],
};

export const releasesSlice = createSlice({
    name: 'releases',
    initialState,
    reducers: {
        fetchReleases(state, action) {
            state.releases = action.payload;
        },
    },
});

export const { fetchReleases } = releasesSlice.actions;
export default releasesSlice.reducer;
