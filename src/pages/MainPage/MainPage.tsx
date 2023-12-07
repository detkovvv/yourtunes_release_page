import { Button } from '@mui/material';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Release } from '../../components/Release/Release';
import { releaseAPI } from '../../servicees/ReleaseService';
import { type IRelease } from '../../store/reducers/ReleasesSlice';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const { data: releases } = releaseAPI.useGetReleasesQuery('');

    return (
        <div>
            <div>Your releases</div>
            {releases ? (
                releases.map((release: IRelease) => (
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
