import React, { useState } from 'react';
import Logout from '../components/Logout.js';
import '../styles/StylesMenu.css';
import ImageMenu from '../assets/image-removebg-preview.png';

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(!isMenuOpen);
    const overlay = document.getElementById('overlay');
    const menuBar = document.getElementById('menuBar');

    if (isMenuOpen) {
      menuBar.style.display = 'none';
      overlay.classList.remove('visible');
    } else {
      menuBar.style.display = 'flex';
      overlay.classList.add('visible');
    }
  }

  return (
    <>
      <button onClick={openMenu} id='menuButton' className="menuButton">
        {isMenuOpen ? '-' : '+'}
      </button>
      <div id='menuBar' className="menuBar">
      <img className="imageMenu" src={ImageMenu} alt="" />
        <div className='containerMenu'>
          <button onClick={openMenu} id='menuButton' className="menuButton">
            {isMenuOpen ? '-' : '+'}
          </button>
          <a className='routerButtons' href={`/IndexList`}>HOUSES</a>
          <a className='routerButtons'>SELL A HOUSE</a>
          <a className='routerButtons'>PROFILE</a>
          <Logout/>
        </div>
      </div>
      <div id="overlay" className={`overlay ${isMenuOpen ? 'visible' : ''}`}></div>
    </>
  );
}

export default Menu;
