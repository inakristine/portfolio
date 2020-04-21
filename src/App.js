import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import './scss/styles.scss';

export default function App(props) {
  return (
    <div className="App">
    <Nav />
    {props.children}
    <Footer />
    </div>
  );
}
