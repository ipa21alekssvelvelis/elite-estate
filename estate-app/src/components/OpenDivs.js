import React from 'react';

function OpenDivs({ openDiv, openDiv2 }) {
  return (
    <div>
      <div className="hiddenAdditional" style={{ display: 'none' }} id="invisID">
        <div className="additionalHeading">ADDITIONAL INFORMATION</div>
        <a href="#" id="closeButton" onClick={openDiv} className="closeButton">
          X
        </a>
        <div className="infoBox">
          <div className="mainInfoBox">
            <div className="label">AREA SIZE:</div>
            <div className="information">3000 sq. ft</div>
          </div>
          <div className="mainInfoBox">
            <div className="label">LAND AREA:</div>
            <div className="information">0.25 acres</div>
          </div>
          {/* Add more information as needed */}
        </div>
      </div>
      <div className="hiddenContact" style={{ display: 'none' }} id="invisID2">
        <div className="additionalHeading">CONTACT SELLER</div>
        <div className="infoBox2">
          <div className="takHz">
            <div className="hzHeading">PHONE NUMBER:</div>
            <div className="hzText">123-456-7890</div>
          </div>
          <div className="takHz">
            <div className="hzHeading">EMAIL:</div>
            <div className="hzText">seller@example.com</div>
          </div>
          <div className="takHz">
            <div className="hzHeading">FULL NAME:</div>
            <div className="hzText">John Doe</div>
          </div>
          {/* Add more contact information as needed */}
        </div>
        <a href="#" id="closeButton2" onClick={openDiv2} className="closeButton">
          x
        </a>
      </div>
    </div>
  );
}

export default OpenDivs;
