import React, { useState } from 'react';
import '../styles/StylesMain2.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/buyAHouse.png';
import Menu from './Menu.js';





function HouseEdit(){
    

    return(
        
        <>
        
        <div className="container">
        <Menu/>
      <div class="topHeading">
        <div class="mainHeadingTextBox">
          <img class="img1" src={image} alt=""/>
        </div>
      </div>
      <div class="midLine"></div>
      <div class="underMid">
        <div class="smallBox">
          <div class="mainHeadingTextBox2">
            <img src={image2}  alt=""/>
          </div>
        </div>
      </div>
      <div class="midLine2"></div>




      <div class="editContainer">
        <div class="topHeading2">EDIT</div>
        <div class="midContainer">
          <div class="left">
            <div class="mainImageContainer">
              <a href="" class="addImage">+</a>
            </div>
            <div class="underImageContainer">
              <a href="" class="smallImageBox"></a>
                    <a href="" class="smallImageBox"></a>
                    <a href="" class="smallImageBox"></a>
                    <a href="" class="smallImageBox"></a>
                    <a href="" class="smallImageBox"></a>
                   
            </div>
          </div>
          <div class="right">
            <div class="box">
              <div class="boxHeading"><input class="inputField" placeholder="MEGA MANSION FORTNITE" type="text"/></div>
                    <div class="descriptionBox">
                        <div class="descTextBox"><input class="inputFieldDesc" placeholder="MEGA MANSION FORTNITE" type="text"/></div>
                    </div>
                    <div class="aboutBox">
                      <div class="aboutFullCont">
                        <div class="label">SELLER:</div>
                        <div class="info">JEBDZENIJS SUVALAVS</div>
                      </div>

                      <div class="aboutFullCont">
                        <div class="label">PRICE:</div>
                        <div class="info"><input class="inputFieldUnder"  type="text"/></div>
                      </div>
                      <div class="aboutFullCont">
                        <div class="label">AVAILABLE:</div>
                        <div class="info"><input type="checkbox" class="inputFieldAvailable"/></div>
                      </div>

                    </div>

                    <div class="buttonBox">
                      <button class="saveButton">SAVE</button>
                    </div>

            </div>
        </div>
      </div>

    </div>
    </div>
    </>
    );

}

export default HouseEdit;