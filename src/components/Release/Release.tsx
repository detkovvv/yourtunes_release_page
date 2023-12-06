import React, { type FC } from 'react';

export const Release: FC<{ date: string; link: string; name: string }> = ({ date, link, name }) => {
    return (
        <div>
            <div>
                <img alt='release' src={link} />
                <div>{name}</div>
                <div>release date: {date}</div>
            </div>
        </div>
    );
};
