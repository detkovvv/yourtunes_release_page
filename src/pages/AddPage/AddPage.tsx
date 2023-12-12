import { Box, Button, Container } from '@mui/material';
import React, {
    type ChangeEventHandler,
    type FC,
    type FormEventHandler,
    useMemo,
    useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { useAddReleaseMutation } from '../../servicees/ReleaseService';
const buttonStyle = {
    width: '200px',
    height: '40px',
    background: 'skyblue',
    mt: 3,
    color: 'white',
    '&:hover': { background: 'CornflowerBlue' },
};
export const AddPage: FC = () => {
    const navigate = useNavigate();
    const [addRelease, { isLoading, isError }] = useAddReleaseMutation();
    const inputValue = useRef<HTMLInputElement>(null);

    const file = useMemo(() => {
        return new FormData();
    }, []);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        // @ts-ignore
        file.append('input_ava', (event.target as HTMLInputElement).files[0]);
        console.log(file);
    };
    const handleAddRelease: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        await addRelease(file).unwrap();
        (inputValue.current as HTMLInputElement).value = '';
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
                        ref={inputValue}
                        required={true}
                        type='file'
                    />
                    <Button sx={buttonStyle} type='submit'>
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
                <Button onClick={() => navigate('/')} sx={buttonStyle}>
                    Back to list
                </Button>
            </Box>
        </Container>
    );
};
