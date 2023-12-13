import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { type FC, useState } from 'react';

import { useDeleteReleaseMutation, useUpdateAvaMutation } from '../../servicees/ReleaseService';
import { ModalWindow } from '../ModalWindow/ModalWindow';

export const Release: FC<{ date: string; link: string; name: string; uid: string }> = ({
    date,
    link,
    name,
    uid,
}) => {
    const [deleteRelease, { isLoading }] = useDeleteReleaseMutation();
    const [updateRelease, { isError, isSucces }] = useUpdateAvaMutation();

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleDeleteRelease = async () => {
        await deleteRelease({ uid });
        if (!isLoading) setIsOpen(false);
    };
    const handleUpdateRelease = async () => {
        await updateRelease({ uid });
        if (!isLoading) setIsOpen(false);
    };

    return (
        <Card sx={{ maxWidth: 300, height: '100%', boxShadow: 2, '&:hover': { boxShadow: 10 } }}>
            <CardMedia image={link} sx={{ height: 200 }} title={name} />
            <CardContent>
                <Typography component='div' gutterBottom variant='h5'>
                    {name}
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                    public date: {date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' variant='text'>
                    Edit release
                </Button>
                <Button onClick={handleOpen} size='small' variant='text'>
                    Delete release
                </Button>
            </CardActions>
            <ModalWindow
                handleClose={handleClose}
                handleDeleteRelease={handleDeleteRelease}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </Card>
    );
};
