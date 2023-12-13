import { Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import React, { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Release } from '../../components/Release/Release';
import { useGetReleasesQuery } from '../../servicees/ReleaseService';
import { type IRelease } from '../../store/reducers/ReleasesSlice';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const { data, isLoading, isFetching } = useGetReleasesQuery('');

    if (isLoading || isFetching) {
        return (
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }
    const releases: IRelease[] = data.result;

    return (
        <Container maxWidth='lg'>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography component='h1' variant='h2'>
                    Your releases
                </Typography>
                <Button
                    onClick={() => navigate('/add')}
                    sx={{
                        width: '200px',
                        height: '40px',
                        background: 'skyblue',
                        mt: 3,
                        color: 'white',
                        '&:hover': { background: 'CornflowerBlue' },
                    }}
                >
                    add new release
                </Button>
            </Box>
            <Stack
                direction='row'
                flexWrap='wrap'
                spacing={{ xs: 2, sm: 8 }}
                sx={{ mt: '30px' }}
                useFlexGap
            >
                {releases ? (
                    releases.map((release: IRelease) => (
                        <Release
                            date={release.public_date}
                            key={release.uid}
                            link={release.ava_link}
                            name={release.name}
                            uid={release.uid}
                        />
                    ))
                ) : (
                    <Typography content='h2' variant='body1'>
                        no added releases
                    </Typography>
                )}
            </Stack>
        </Container>
    );
};
