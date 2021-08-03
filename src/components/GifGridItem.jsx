import React from 'react';


const GifGridItem = ({ title, url }) => {
    return (
        <div className='card animate__animated animate__fadeInDown'>
            <div>
                <img src={url} alt={title} />
            </div>
            <div>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default GifGridItem;