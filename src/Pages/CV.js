import React from 'react';
import Title from '../components/cvTitle';
import Content from '../components/cvContent';

export default function home(props) {
    
  return (
    <div>
    <Title when='Work:' what='Position:' where='Company:' />
    <Content when='2018' what='Graphic designer' where='Oslo Digitaltrykk' />
    <Content when='2017 – 2018' what='Graphic designer' where='Artworx' />
    <Content when='2016 – 2017' what='Parental leave' where=' '/>
    <Content when='2015 – 2016' what='Graphic designer/Freelance' where='Oslo Digitaltrykk' />
    <Content when='2014' what='Parental leave' where=' ' />
    <Content when='2012 – 2013' what='Typographer' where='Finansavisen' />
    <Content when='2012' what='Parental leave'  where=' '/>
    <Content when='2006 – 2012' what='Consultant/temp' where='Medievikar' />
    <Content when='2006' what='Graphic designer' where='Simplicatus AS' />
    <Content when='2002 – 2005' what='Secretary and consultant' where='McMox' />
    <Content when='2001– 2002' what='Typographer' where='Avisen Hadeland' />

    <Title when='Education:' what='Subject:' where='School:' />
    <Content when='2018 – 2020' what='Frontend developement' where='Noroff School of thecnology and digital design' />
    <Content when='2008 – 2009' what='Web Production' where='Institutt for grafiske medier' />
    <Content when='2003 – 2005' what='Pre-course for engineering' where='Høgskolen i Sør-Trøndelag' />
    <Content when='2002 – 2001' what='Typograophy diploma' where='Avisen Hadeland' />
    <Content when='1997 – 1998' what='Pre-print VK2' where='Sogn videregående skole' />
    <Content when='1996 – 1997' what='Pre-print VK1' where='Glemmen videregående skole' />
    <Content when='1995 – 1996' what='Basic course design' where='Mysen videregående skole' />
    <Content when='2018' what='Graphic designer' where='Oslo Digitaltrykk' />

    <Title when='Software:' what='Plattform:' where='Level:' />
    <Content when='Adobe InDesign' what='Mac and PC' where='Advanced' />
    <Content when='Adobe Photoshop' what='Mac and PC' where='Advanced' />
    <Content when='Adobe Illustrator' what='Mac and PC' where='Advanced' />
    <Content when='Corel Draw' what='PC' where='Basic' />
    <Content when='Microsoft Office' what='Mac and PC' where='medium' />
    <Content when='Open Office' what='Mac and PC' where='medium' />


    </div>
  );
}
