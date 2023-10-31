import React, { useState } from 'react';
import '../styles/StylesMain2.css';


function ContactSeller() {
    const [isVisible, setIsVisible] = useState(false);
  
    function toggleVisibility2() {
      setIsVisible(!isVisible);
    }


    return (
        <>
        
        <div className={`hiddenContactMAIN2 ${isVisible ? 'martins' : ''}`} id="invisID2">
        <div className="additionalHeadingMAIN2">CONTACT SELLER</div>
        <button
          id="closeButton2"
          className="closeButtonMAIN2"
          onClick={toggleVisibility2}
        ></button>
        <div className="infoBox2MAIN2">
          <div className="takHzMAIN2">
            <div className="hzHeadingMAIN2">PHONE NUMBER:</div>
            <div className="hzTextMAIN2">123-456-7890</div>
          </div>
          <div className="takHzMAIN2">
            <div className="hzHeadingMAIN2">EMAIL:</div>
            <div className="hzTextMAIN2">seller@example.com</div>
          </div>
          <div className="takHzMAIN2">
            <div className="hzHeadingMAIN2">FULL NAME:</div>
            <div className="hzTextMAIN2">John Doe</div>
          </div>
        </div>
        
      </div>
        
        </>
    );
}

export default ContactSeller;
