import { Button } from '@mui/material';
import { type FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Release } from '../../components/Release/Release';
import { type IRelease } from '../../store/slice/releases';
import { axiosInstance } from '../../utils/axios';
import { useAppSelector } from '../../utils/hooks';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const releases: IRelease[] = [];
    // const releases = useAppSelector((store) => store.releases.releases);
    const getReleases = async (): Promise<void> => {
        await axiosInstance.get('/release/list').then((response) => console.log(response.data));
    };
    useEffect(() => {}, []);

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
            <Button onClick={() => navigate('add')} type='button'>
                add release
            </Button>
        </div>
    );
};
