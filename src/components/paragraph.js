import React from 'react';

const paragraph = (props) => {
    const { text } = props;

    return (
        <div className='paragraph'>
            
           <p className='paragraph__text'>{ text }</p>
        </div>
    )
}

export default paragraph;