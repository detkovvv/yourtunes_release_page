import { Box, Snackbar, Alert } from '@mui/material';
import React, { type FC, useEffect, useState } from 'react';

export const Alerts: FC<{ isError: boolean; isSuccess: boolean; error: any }> = ({
    isError,
    isSuccess,
    error,
}) => {
    const [successIsOpen, setSuccessIsOpen] = useState(false);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    useEffect((): void => {
        if (isError) setErrorIsOpen(true);
        if (isSuccess) setSuccessIsOpen(true);
    }, [isError, isSuccess]);

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
