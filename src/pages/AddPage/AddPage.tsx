import { Box, Button, Container } from '@mui/material';
import React, { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAddReleaseMutation } from '../../servicees/ReleaseService';

export const AddPage: FC = () => {
    const navigate = useNavigate();
    const [addRelease, { isLoading, isError }] = useAddReleaseMutation();
    const [selectedFile, setSelectedFile] = useState('');

    const formData = new FormData();

    const handleChange = (event: any) => {
        formData.append('file', event.target.files[0]);
        console.log(formData.getAll('file'));
        // @ts-ignore
        setSelectedFile(formData);
        console.log(selectedFile);
    };
    const handleAddRelease = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        formData.getAll('input_ava');
        // console.log(formData);
        // eslint-disable-next-line camelcase
        await addRelease({ input_ava: formData.get('file') }).unwrap();
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
                <form onSubmit={handleAddRelease}>
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
