import React, { useState } from 'react';
import '../styles/StylesMain2.css';


function AdditionaInfo(){

    const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <div className={`hiddenAdditionalMAIN2 ${isVisible ? 'visible' : ''}`} id="invisID">
        <div className="additionalHeadingMAIN2">ADDITIONAL INFORMATION</div>
        <button id="closeButton" className="closeButtonMAIN2" onClick={toggleVisibility}>
          
        </button>
        
        <div className="infoBoxMAIN2">
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">AREA SIZE:</div>
            <div className="informationMAIN2">3000 sq. ft</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">BEDROOMS:</div>
            <div className="informationMAIN2">0.25 acres</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">LAND AREA:</div>
            <div className="informationMAIN2">0.25 acres</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">BATHROOMS:</div>
            <div className="informationMAIN2">0.25 acres</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">ROOMS:</div>
            <div className="informationMAIN2">0.25 acres</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">PROPERTY TYPE:</div>
            <div className="informationMAIN2">0.25 acres</div>
          </div>
        </div>
      </div> 
        
        </>
    );
}

export default AdditionaInfo;