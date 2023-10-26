import React, { useState } from 'react';
import '../styles/StylesMain3.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/editaprofile.png';
import Menu from './Menu.js';





function CreateProfile(){
    

    return(
        
        <>
        
        <div className="container">
        <Menu/>
        <div class="menuButton">+</div>
      <div class="menuBar"></div>
      <div class="topHeading">
        <div class="mainHeadingTextBox">
          <img class="img1" src={image} alt=""/>
        </div>
      </div>
      <div class="midLine"></div>
      <div class="underMid">
        <div class="smallBox">
          <div class="mainHeadingTextBox2">
            <img src={image2} alt=""/>
          </div>
        </div>
      </div>
      <div class="midLine2"></div>




      <div class="midContainer">
        <div class="midBox">
            <div class="boxHeading">PROFILE PERSONALISATION</div>
            <form action="">
                <div class="formBlock">
                    <div class="blockLabel">NAME</div>
                    <input class="inputFieldUnder"  type="text"/>
                </div>
                <div class="formBlock">
                    <div class="blockLabel">EMAIL</div>
                    <input class="inputFieldUnder"  type="text"/>
                </div>
                <div class="formBlock">
                    <div class="blockLabel">SURNAME</div>
                    <input class="inputFieldUnder"  type="text"/>
                </div>
                <div class="formBlock">
                    <div class="blockLabel">PERSONAL CODE</div>
                    <input class="inputFieldUnder"  type="text"/>
                </div>
                <div class="formBlock">
                    <div class="blockLabel">PHONE</div>
                    <input class="inputFieldUnder"  type="text"/>
                </div>
                
            </form>
            <div class="buttonBox">
                <button class="saveButton">SAVE</button>
            </div>
        </div>
      </div>
    </div>
    </>
    );

}

export default CreateProfile;