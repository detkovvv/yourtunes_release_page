import { type FC } from 'react';

import { axiosInstance } from '../../utils/axios';

export const MainPage: FC = () => {
    const getReleases = async (): Promise<void> => {
        await axiosInstance.get('/release/list').then((response) => console.log(response.data));
    };
    getReleases();
    return <div>MainPage</div>;
};
