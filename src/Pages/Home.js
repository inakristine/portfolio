import React from 'react';
import Home from '../components/home';
import HomeTitle from '../components/generalTitle';

import skytsdjevelen from '../images/Skutsdjevelen-500.png';
import wallclimber from '../images/Wallclimbers-500.png';
import homefair from '../images/HomeFair-500.png';
import cardgame from '../images/CardGame-500.png';
import recycle from '../images/ReCycle-500.png';
import unStudents from '../images/UN-students-500.png';
import hubble from '../images/Hubble-500.png';

export default function home(props) {

  return (
    <div>
      <HomeTitle theme='My Work:' />
      <Home
        picture={skytsdjevelen}
        imgDescription='This page precents a criminal novel written by Kent Andersen'
        jobtitle='Skytsdjevelen'
        task='To make a single page book-promotion site for "Fair Forlag", the publisher of a criminal novel'
        description='The page should have a design that makes new readers interested in the book.'
        responsive='Yes'
        time='1 week'
        jobSpecific='https://skytsdjevelen.no/'
        git='' />

      <HomeTitle theme='My student projects 2nd year:' />

      <Home
        picture={wallclimber}
        imgDescription='Semester project 3rd semester'
        jobtitle='Wallclimbers Challenge'
        task='Boardgame created in HTML with Vanilla JavaScript. All design and code was part of the task.'
        description='Semester project 3rd semester'
        responsive='No'
        time='5 weeks'
        jobSpecific='https://framenden.no/Semester-Project_Ina_Dec-2019/'
        git='' />

      <Home
        picture={homefair}
        imgDescription='Semester project 3rd semester'
        jobtitle='Home Fair'
        task='Pitch design for costumer, whileimplementing screen size relative images.'
        description='The costumer is building a sitee to evaluate and compare realestate agents with AI.'
        responsive='Yes'
        time='1 week'
        jobSpecific='https://framenden.no/Semester-Project_Ina_Dec-2019/'
        git='' />

      <Home
        picture={cardgame}
        imgDescription='Site displaying playing cards'
        jobtitle='Card game'
        task='Import and sort cards rrom API. Make search function and contact forp that validates input. Have a login/logout function for the site. Make accordion on about-page.'
        description='This site is buildt with react hoocks.'
        responsive='Yes'
        time='3 weeks'
        jobSpecific='https://framenden.no/Semester-Project_Ina_Dec-2019/'
        git='' />

      <HomeTitle theme='My student projects 1st year:' />

      <Home
        picture={recycle}
        imgDescription='Site for enviromeental friendli bike sightseeings'
        jobtitle='Re-cycle'
        task='HTML and CSS practice.'
        description='course assignement'
        responsive='Yes'
        time='1 week'
        jobSpecific='https://framenden.no/2018-11-05-web&CSS1_CA_Ina_Thoresen_fp/'
        git='' />

      <Home
        picture={unStudents}
        imgDescription='Semester project 1st semester'
        jobtitle='UN-students'
        task='Pitch design for costumer.'
        description='Semester project 1st semester'
        responsive='yes'
        time='4 weeks'
        jobSpecific='https://framenden.no/2018-12-14-FN/'
        git='' />

      <Home
        picture={hubble}
        imgDescription='Semester project 3rd semester'
        jobtitle='Hubble space telescope'
        task='Make a space related page with some vanilla JS, at least one API call and a timeline.'
        description='Semester project 2nd semester'
        responsive='yes'
        time='3 weeks'
        jobSpecific='https://framenden.no/Hubble/'
        git='' />
    </div>
  );
}


