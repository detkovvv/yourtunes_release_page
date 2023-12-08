import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Modal,
    Typography,
} from '@mui/material';
import React, { type FC, useState } from 'react';

export const Release: FC<{ date: string; link: string; name: string }> = ({ date, link, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia image={link} sx={{ height: 300 }} title={name} />
            <CardContent>
                <Typography component='div' gutterBottom variant='h5'>
                    {name}
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                    public date: {date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Edit release</Button>
                <Button onClick={handleOpen} size='small'>
                    Delete release
                </Button>
            </CardActions>
            <Modal
                aria-describedby='modal-modal-description'
                aria-labelledby='modal-modal-title'
                onClose={handleClose}
                open={isOpen}
            >
                <Box sx={style}>
                    <Typography>are you sure?</Typography>
                    <Button onClick={() => {}}>Yes</Button>
                    <Button
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        No
                    </Button>
                </Box>
            </Modal>
        </Card>
    );
};
