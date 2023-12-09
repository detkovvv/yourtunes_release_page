import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Release } from '../../components/Release/Release';
import { useGetReleasesQuery } from '../../servicees/ReleaseService';
import { type IRelease } from '../../store/reducers/ReleasesSlice';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    const { data, isLoading, isFetching } = useGetReleasesQuery('');

    if (isLoading || isFetching) return <div>isLoading...</div>;
    const releases = data.result;

    return (
        <Container maxWidth='lg'>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h1'>Your releases:</Typography>
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
            </Box>
            <Stack
                direction='row'
                flexWrap='wrap'
                spacing={{ xs: 2, sm: 8 }}
                sx={{ marginTop: '30px' }}
                useFlexGap
            >
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
            </Stack>
        </Container>
    );
};
