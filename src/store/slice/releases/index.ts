import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    releases: {},
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
