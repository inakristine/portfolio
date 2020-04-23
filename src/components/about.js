import React from 'react';

const about = (props) => {
    const { when, what, where } = props;

    return (
        <div className='about'>
            <p className='about'>{when}</p>
            <p className='about'>{what}</p>
            <p className='about'>{where}</p>
        </div>
    )
}

export default about;