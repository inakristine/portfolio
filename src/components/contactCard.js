import React from 'react';

const conactCard = (props) => {
    const { picture, imgDescription, name, family, location, jobSpecific, git } = props;

    return (
        <div className='card'>
            <img className='card__picture' src={picture} alt={imgDescription}></img>
            <div className='card__text'>
                <p classname='card__text--first'><b>Name: </b>{name}</p>
                <p className='card__text--middle'><b>Family: </b>{family}</p>
                <p className='card__text--last'><b>Location: </b>{location}</p>
                <div className='divider__short'></div>
            </div>
            
        </div>
    )
}

export default conactCard;