import { Box, Button, Container } from '@mui/material';
import React, { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAddReleaseMutation } from '../../servicees/ReleaseService';

export const AddPage: FC = () => {
    const navigate = useNavigate();
    const [addRelease, { isLoading, isError }] = useAddReleaseMutation();
    const [selectedFile, setSelectedFile] = useState('');

    const handleChange = (event: any) => {
        console.log(event.target.files[0]);
        const formData = new FormData();
        formData.getAll(event.target.files[0]);
        console.log(formData);
    };
    const handleAddRelease = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // console.log(formData);
        // eslint-disable-next-line camelcase
        await addRelease({ input_ava: selectedFile }).unwrap();
    };

    return (
        <Container
            maxWidth='lg'
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box>
                <Button
                    sx={{
                        width: '200px',
                        height: '40px',
                        background: 'skyblue',
                        mt: 3,
                        color: 'white',
                        '&:hover': { background: 'CornflowerBlue' },
                    }}
                    type='submit'
                >
                    Select a picture
                </Button>

                <input
                    accept='.jpg, .png'
                    id='field_file'
                    name='file'
                    onChange={handleChange}
                    required={true}
                    type='file'
                    value={selectedFile}
                />
                <Button
                    sx={{
                        width: '200px',
                        height: '40px',
                        background: 'skyblue',
                        mt: 3,
                        color: 'white',
                        '&:hover': { background: 'CornflowerBlue' },
                    }}
                    type='submit'
                >
                    Upload
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 10,
                }}
            >
                <Button
                    onClick={() => navigate('/')}
                    sx={{
                        width: '200px',
                        height: '40px',
                        background: 'skyblue',
                        mt: 3,
                        color: 'white',
                        '&:hover': { background: 'CornflowerBlue' },
                    }}
                >
                    Back to list
                </Button>
            </Box>
        </Container>
    );
};
