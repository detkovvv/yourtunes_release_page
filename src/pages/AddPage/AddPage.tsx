import { Box, Button, Container } from '@mui/material';
import React, {
    type ChangeEventHandler,
    type FC,
    type FormEventHandler,
    useMemo,
    useRef,
    useState,
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
    const [successIsOpen, setSuccessIsOpen] = useState(false);
    const [errorIsOpen, setErrorIsOpen] = useState(false);

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
                <Alerts
                    errorIsOpen={errorIsOpen}
                    setErrorIsOpen={setErrorIsOpen}
                    setSuccessIsOpen={setSuccessIsOpen}
                    successIsOpen={successIsOpen}
                />
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
