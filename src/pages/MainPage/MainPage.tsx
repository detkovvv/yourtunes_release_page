import { type FC } from 'react';

import { Release } from '../../components/Release/Release';
import { type IRelease } from '../../store/slice/releases';
import { axiosInstance } from '../../utils/axios';

export const MainPage: FC = () => {
    const releases: IRelease[] = [];
    const getReleases = async (): Promise<void> => {
        await axiosInstance.get('/release/list').then((response) => console.log(response.data));
    };
    return (
        <div>
            <div>Your releases</div>
            {releases ? (
                releases.map((release) => (
                    <Release
                        date={release.public_date}
                        key={release.uid}
                        link={release.ava_short_link}
                        name={release.name}
                    />
                ))
            ) : (
                <div>no added releases</div>
            )}
        </div>
    );
};
