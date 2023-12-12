import { Box, Button, Container, Typography } from '@mui/material';
import React, { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAddReleaseMutation } from '../../servicees/ReleaseService';

export const AddPage: FC = () => {
    const navigate = useNavigate();
    const [addRelease] = useAddReleaseMutation();
    const [selectedFile, setSelectedFile] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        console.log(event.target.files[0]);
        // @ts-ignore
        setSelectedFile(event.target.files[0]);
    };
    const sendFile = async () => {
        const formData = new FormData();
        formData.append('input_ava', selectedFile);
        await addRelease({ body: formData });
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
                <form onSubmit={sendFile}>
                    Select a picture
                    <input
                        accept='.jpg, .png'
                        id='field_file'
                        name='file'
                        onChange={handleChange}
                        required={true}
                        type='file'
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
                </form>
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
