import React from 'react';

const Home = (props) => {
    const { picture, imgDescription, jobtitle, task, description, responsive, time, jobSpecific, git } = props;

    return (
        <div className='home'>
            <img className='home__picture' src={picture} alt={imgDescription}></img>
            <div className='home__text'>
                <h2 classname='home__heading'>{jobtitle}</h2>
                <p className='home__task'><b>Task: </b>{task}</p>
                <p className='home__description'><b>Description: </b>{description}</p>
                <p className='home__responsive'><b>Responsive: </b>{responsive}</p>
                <p className='home__time'><b>Time: </b>{time}</p>

            </div>
            <div className='home__links'>
                <div className='divider__short'></div>
                <a className='home__gitlink' href={git}>Go to GitHub</a>
                <a className='home__joblink' href={jobSpecific}>Go to site</a>
                <div className='divider__short'></div>
            </div>
        </div>
    )
}

export default Home;