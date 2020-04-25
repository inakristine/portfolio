import React from 'react';
import HomeTitle from '../components/generalTitle';
import Card from '../components/contactCard';
import Paragraph from '../components/paragraph';
import myPortrait from '../images/ina.jpg';

export default function contact(props) {


  return (
    <div>
    <HomeTitle theme='About me:' />
    <Card picture={myPortrait}
    name='Ina Kristine Thoresen'
    family='Husbond and three children'
    location='Oslo, Norway'
    git='https://www.linkedin.com/in/ina-kristine-thoresen/' />
      
    <HomeTitle theme='My key skills:' />
    <Paragraph text='• Vocational education in both graphic design and frontend developmen' />
    <Paragraph text='• Unique experience in the interface between marketing and publishing' />
    <Paragraph text='• Takes challenges and learns quickly' />
    <Paragraph text='• Fearless in the face of new challenges' />
    <Paragraph text='• Allways solution-oriented' />
    
    <HomeTitle theme='Something Personal:' />
    <Paragraph text='I have the opportunity to work very flexibly without regard to sick children or kindergarten opening hours. My husband has a job situation that allows him to take care of that bit. I am also good at baking cakes, and organizing events. I am practical and have an eye for logistics.' />
    
    <HomeTitle theme='Strong sides:' />
    <Paragraph text='I have a great love for learning new skills and making products of value to my clients.
    As a classic nerd, I don’t like to put my unresolved issues aside. I am efficient, conscientious, educated and have a lot of loyalty and good work ethic to offer.' />
    
    <HomeTitle theme='My aspirations:' />
    <Paragraph text='My perfect workplace is a place where knowledge is shered goods, and where my collegues and I find plesure in shering new skills and keeping each other up to date in new front-end  tecniques. It is a place where employees professional development is highly valued so that they can fulfill their dayly tasks in the best possible way.' />

    <Paragraph text='I would love the oppertunity to come to work and meet my collegues every day. I can work from home, but where is the fun in that?' />

    <Paragraph text='Ideally, I want to work in a place where the working environment is good and where I can go to work and be inspired by good colleagues.
    A positive and inspiering working environment, where I can evolve as an employee, and feel secure and safe is more important to me than fancy perks and high salaries.' />
    



    </div>
  );
}


