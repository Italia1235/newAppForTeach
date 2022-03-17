import React from 'react';
import {useParams} from 'react-router-dom'

export const Student = () => {
    console.log(useParams())
    return (
        <div>
            Страница ученика
        </div>
    );
};

