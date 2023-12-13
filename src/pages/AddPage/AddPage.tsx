import { Box, Button, Container } from '@mui/material';
import React, {
    type ChangeEventHandler,
    type FC,
    type FormEventHandler,
    useMemo,
    useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Alerts } from '../../components/Alerts/Alerts';
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
    const [addRelease, { isLoading, isError, isSuccess, error }] = useAddReleaseMutation();
    const inputValue = useRef<HTMLInputElement>(null);

    const file = useMemo(() => {
        return new FormData();
    }, []);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
        file.append('input_ava', (event.target.files || [])[0]);
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
                        accept='.png, .jpg'
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
            <Alerts error={error} isError={isError} isLoading={isLoading} isSuccess={isSuccess} />
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
