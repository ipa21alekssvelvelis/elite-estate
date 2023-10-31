import React, { useState } from 'react';
import '../styles/StylesMain4.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/editAhouse.png';
import Menu from './Menu.js';





function HouseEdit(){
    

    return(
        
        <>
        
        <div className="containerMAIN4">
        <Menu/>
      <div class="topHeadingMAIN4">
        <div class="mainHeadingTextBoxMAIN4">
          <img class="img1MAIN2" src={image} alt=""/>
        </div>
      </div>
      <div class="midLineMAIN4"></div>
      <div class="underMidMAIN4">
        <div class="smallBoxMAIN4">
          <div class="mainHeadingTextBox2MAIN4">
            <img src={image2} class="img1MAIN4"  alt=""/>
          </div>
        </div>
      </div>
      <div class="midLine2MAIN4"></div>




      <div class="editContainerMAIN4">
        <div class="topHeading2MAIN4">EDIT</div>
        <div class="midContainerMAIN4">
          <div class="leftMAIN4">
            <div class="mainImageContainerMAIN4">
              <a href="" class="addImageMAIN4">+</a>
            </div>
            <div class="underImageContainerMAIN4">
              <a href="" class="smallImageBoxMAIN4"></a>
                    <a href="" class="smallImageBoxMAIN4"></a>
                    <a href="" class="smallImageBoxMAIN4"></a>
                    <a href="" class="smallImageBoxMAIN4"></a>
                    <a href="" class="smallImageBoxMAIN4"></a>
                   
            </div>
          </div>
          <div class="rightMAIN4">
            <div class="boxMAIN4">
              <div class="boxHeadingMAIN4"><input class="inputFieldMAIN4" placeholder="MEGA MANSION FORTNITE" type="text"/></div>
                    <div class="descriptionBoxMAIN4">
                        <div class="descTextBoxMAIN4"><input class="inputFieldDescMAIN4" placeholder="MEGA MANSION FORTNITE" type="text"/></div>
                    </div>
                    <div class="aboutBoxMAIN4">
                      <div class="aboutFullContMAIN4">
                        <div class="labelMAIN4">SELLER:</div>
                        <div class="infoMAIN4">JEBDZENIJS SUVALAVS</div>
                      </div>

                      <div class="aboutFullContMAIN4">
                        <div class="labelMAIN4">PRICE:</div>
                        <div class="infoMAIN4"><input class="inputFieldUnderMAIN4"  type="text"/></div>
                      </div>
                      <div class="aboutFullContMAIN4">
                        <div class="labelMAIN4">AVAILABLE:</div>
                        <div class="infoMAIN4"><input type="checkbox" class="inputFieldAvailableMAIN4"/></div>
                      </div>

                    </div>

                    <div class="buttonBoxMAIN4">
                      <button class="saveButtonMAIN4">SAVE</button>
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