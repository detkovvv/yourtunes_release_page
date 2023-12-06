import React, { type FC } from 'react';

export const AddPage: FC = () => {
    return (
        <div>
            <input id='field_file' name='file' type='file' />
            <label htmlFor='field_file'>
                <div>Выберите файл</div>
            </label>
        </div>
    );
};
