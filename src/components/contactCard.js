import React from 'react';

const conactCard = (props) => {
    const { picture, imgDescription, name, family, location, jobSpecific, git } = props;

    return (
        <div className='card'>
            <img className='card__picture' src={picture} alt={imgDescription}></img>
            <div className='card__text'>
                <p classname='card__text'><b>Name: </b>{name}</p>
                <p className='card__text'><b>Family: </b>{family}</p>
                <p className='card__text'><b>Location: </b>{location}</p>


            </div>
            <div className='card__links'>
                <div className='divider__short'></div>
                <a className='card__gitlink' href={git}>Go to GitHub</a>
                <a className='card__joblink' href={jobSpecific}>Go to site</a>
                <div className='divider__short'></div>
            </div>
        </div>
    )
}

export default conactCard;