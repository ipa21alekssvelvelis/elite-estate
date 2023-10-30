import React, { useState } from 'react';
import '../styles/StylesMain.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/buyAHouse.png';





function IndexList(){
    

    return(
        <div className="container">
      <div className="topHeading">
        <div className="mainHeadingTextBox">
          <img src={image} alt="ddd"></img>
                  </div>
      </div>
      <div className="midLine"></div>
      <div className="underMid">
        <div className="smallBox">
          <div className="mainHeadingTextBox2">
          <img src={image2} alt="Buy a House"></img>
          </div>
        </div>
      </div>
      <div className="midLine2"></div>
      <button className="sortButton">SORT</button>
      <div className="listBox">

        <div className="listBigBox">
            <a href="/html_files/houseView.html" className="listBoxTop"></a>
            <a className="listBoxBot">30 000 000 $</a>
        </div>
        <div className="listBigBox">
          <a href="/html_files/houseView.html" className="listBoxTop"></a>
          <a className="listBoxBot">30 000 000 $</a>
      </div>
      <div className="listBigBox">
        <a href="/html_files/houseView.html" className="listBoxTop"></a>
        <a className="listBoxBot">30 000 000 $</a>
    </div>
        
        
        
       
      
      </div>
    </div>
    );

}

export default IndexList;