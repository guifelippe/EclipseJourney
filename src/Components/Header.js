import React, { useState, useEffect } from 'react';
import logo from '../images/NASA_LOGO.png';
import '../Styles/Header.css';

function Header() {
  useEffect(() => {
    const links = document.querySelectorAll("header nav ul li a");

    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  }, []); // Certifique-se de que esteja vazio para que o efeito seja executado apenas uma vez

  return (
    <header>
      <h1>🌒 Exploring the Eclipse 🌒</h1>
      <nav className='nav-bar'>
        <ul>
          <li><a href='#'>🌒Start</a></li>
          <li><a href='#About'>🌒About Eclipse</a></li>
          <li><a href='#Phases'>🌒Eclipse Phases</a></li>
          <li><a href='#Magic'>🌒Magic equipment</a></li>
          <li><a href='#Creators'>🌒About the creators</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
