import React from 'react';

const cvTitle = (props) => {
    const { when, what, where } = props;

    return (
        <div className='cv__title'>
        <div className='cv__title-when'>
        <h1 className='cv__title-text'>{when}</h1>
        </div>
        <div className='cv__title-what'>
        <h1 className='cv__title-text'>{what}</h1>
        </div>
        <div className='cv__title-where'>
        <h1 className='cv__title-text'>{where}</h1>
        
        </div>
        <div className='divider__long'></div>
        </div>
        
    )
}

export default cvTitle;