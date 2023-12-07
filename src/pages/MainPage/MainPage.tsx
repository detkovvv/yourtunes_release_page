import { Button } from '@mui/material';
import { type FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Release } from '../../components/Release/Release';
import { fetchReleases } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { releases, isLoading, error } = useAppSelector((state) => state.releasesReducer);

    useEffect(() => {
        dispatch(fetchReleases());
    }, []);

    return (
        <div>
            <div>Your releases</div>
            {releases ? (
                releases.map((release: any) => (
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
