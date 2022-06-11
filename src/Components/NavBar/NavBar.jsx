import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='NavBar__left'>Kareem Hospital</div>
      <div className='NavBar__right'>
        <ul className='NavBar__navOptions'>
          <a href='#about'>
            <li className='navBar__navOption'>About</li>
          </a>
          <a href='#appointments'>
            <li className='navBar__navOption'>Appointments</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
