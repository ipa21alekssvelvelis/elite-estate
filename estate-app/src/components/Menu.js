import React from 'react';
import '../styles/StylesMenu.css';


function Menu() {

 
  function openMenu(){
    document.getElementById('menuBar').style.display='flex';
}


  return (
    <>
    <button onClick={openMenu} id='menuButton' className="menuButton">+</button>
      <button id='menuBar' className="menuBar">
        <div className="closeButton">x</div>
      </button>
    </>
  );
}

export default Menu;
