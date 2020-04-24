import React from 'react';

const generalTitle = (props) => {
    const { theme } = props;

    return (
        <div className='home__titlebox'>
            <div className='home__title'>
                <h1 className='home__title-text'>{theme}</h1>

            </div>
            <div className='divider__long'></div>
        </div>

    )
}

export default generalTitle;