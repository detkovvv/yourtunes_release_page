import { createAsyncThunk } from '@reduxjs/toolkit';

import { type IRelease } from './ReleasesSlice';
import { axiosInstance } from '../../servicees/axios';

// export const fetchReleases = async (dispatch: AppDispatch) => {
//     try {
//         dispatch(releasesSlice.actions.releasesFetching());
//         const response = await axiosInstance.get<IRelease[]>('/release/list');
//         dispatch(releasesSlice.actions.releasesFetchingSuccess(response.data));
//     } catch (error) {
//         dispatch(releasesSlice.actions.releasesFetchingError(error.message));
//     }
// };

export const fetchReleases = createAsyncThunk('releases/fetchAll', async (_: void, thunkAPI) => {
    try {
        const response = await axiosInstance.get<IRelease[]>('/release/list');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('не удалось загрузить релизы');
    }
});
