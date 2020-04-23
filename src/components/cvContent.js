import React from 'react';

const cvContent = (props) => {
    const { when, what, where } = props;

    return (
        <div className='cv'>

            <div className='cv__content-when'>
                <p className='cv__content-text'>{when}</p>
            </div>
            <div className='cv__content-what'>
                <p className='cv__content-text'>{what}</p>
            </div>
            <div className='cv__content-where'>
                <p className='cv__content-text'>{where}</p>
            </div>
        </div>
    )
}

export default cvContent;