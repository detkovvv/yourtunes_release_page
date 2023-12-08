import { Button, Container } from '@mui/material';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Release } from '../../components/Release/Release';
import { releaseAPI } from '../../servicees/ReleaseService';
import { type IRelease } from '../../store/reducers/ReleasesSlice';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const { data: currentData } = releaseAPI.useGetReleasesQuery('');
    const releases: IRelease[] = currentData.result;

    return (
        <Container maxWidth='lg'>
            <h1>Your releases:</h1>
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
            <Button
                onClick={() => navigate('/add')}
                sx={{
                    width: '200px',
                    height: '40px',
                    background: 'lightgrey',
                    color: 'white',
                    '&:hover': { background: 'grey' },
                }}
            >
                add new release
            </Button>
        </Container>
    );
};
