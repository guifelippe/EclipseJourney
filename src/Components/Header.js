import React, { useState } from 'react';
import logo from '../images/NASA_LOGO.png';
import '../Styles/Header.css';

function Header() {
  return (
    <header>
      <h1>🌒 Exploring the Eclipse 🌒</h1>
      <nav className='nav-bar'>
        <ul>
          <li><a href='#'>🌒Start</a></li>
          <li><a href='#'>🌒About Eclipse</a></li>
          <li><a href='#'>🌒Eclipse Phases</a></li>
          <li><a href='#'>🌒Magic equipment</a></li>
          <li><a href='#'>🌒About the creators</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;