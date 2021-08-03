import React from 'react';

const GifGridItem = ({ title, url}) => {
    return (
        <div>
            <img src={url} alt={title} />
            <span>{title}</span>
        </div>
    );
};

export default GifGridItem;