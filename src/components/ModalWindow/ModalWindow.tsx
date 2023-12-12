import { Box, Button, Modal, Typography } from '@mui/material';
import React, { type FC } from 'react';
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
export const ModalWindow: FC<{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClose: void;
    handleDeleteRelease: Promise<void>;
}> = ({ isOpen, setIsOpen, handleClose, handleDeleteRelease }) => {
    return (
        <Modal
            aria-describedby='modal-modal-description'
            aria-labelledby='modal-modal-title'
            onClose={() => handleClose}
            open={isOpen}
        >
            <Box sx={modalStyle}>
                <Typography>are you sure?</Typography>
                <Button onClick={() => handleDeleteRelease}>Yes</Button>
                <Button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    No
                </Button>
            </Box>
        </Modal>
    );
};
