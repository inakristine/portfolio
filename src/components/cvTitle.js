import React from 'react';

const cvTitle = (props) => {
    const { when, what, where } = props;

    return (
        <div className='cv'>
        <p className='cv__title--when'>{when}</p>
        <p className='cv__title--what'>{what}</p>
        <p className='cv__title--where'>{where}</p>
        <div className='divider__colored--long'></div>
        </div>
    )
}

export default cvTitle;