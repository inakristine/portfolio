import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Ina-logo.svg';

const navigation = (props) => {
    console.log(props);
  return (
    <nav className='navbar'>
      <div>
        <img src={Logo} alt='My portfolio logo with my name, Ina K. Thoresen'></img>
        <Link className='navbar__link' to='/'>Home</Link>
        <Link className='navbar__link' to="/CV/">CV</Link>
        <Link className='navbar__link' to="/Contact/">Contact</Link>
        <Link className='navbar__link' to="/About/">About</Link>
      </div>
    </nav>
  )
}

export default navigation;


