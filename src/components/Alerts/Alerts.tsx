import { Box, Snackbar, Alert } from '@mui/material';
import React, { type FC } from 'react';

export const Alerts: FC<{
    errorIsOpen: boolean;
    successIsOpen: boolean;
    setSuccessIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setErrorIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ successIsOpen, setSuccessIsOpen, errorIsOpen, setErrorIsOpen }) => {
    return (
        <Box>
            <Snackbar
                autoHideDuration={4000}
                onClose={() => setSuccessIsOpen(false)}
                open={successIsOpen}
            >
                <Alert
                    onClose={() => setSuccessIsOpen(false)}
                    severity='success'
                    sx={{ width: '100%' }}
                >
                    This is a success message!
                </Alert>
            </Snackbar>
            <Snackbar
                autoHideDuration={4000}
                onClose={() => setErrorIsOpen(false)}
                open={errorIsOpen}
            >
                <Alert
                    onClose={() => setErrorIsOpen(false)}
                    severity='error'
                    sx={{ width: '100%' }}
                >
                    This is an error message!
                </Alert>
            </Snackbar>
        </Box>
    );
};
