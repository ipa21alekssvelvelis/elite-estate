import React from 'react';
import '../styles/StylesFake.css';
import image from '../assets/sellAhouse.png';
import image2 from '../assets/image-removebg-preview.png';

function FakePreview() {
  return (
    <div className="containerF">
      <div className="topHeadingF">
        <div className="mainHeadingTextBoxF">
          <img src={image2} alt="Main Logo" />
        </div>
      </div>

      <div className="stripinaBoxF">
        <div className="stripinaF"></div>
      </div>

      <div className="mainHeadingTextBoxF">
        <img className="selahaF" src={image} alt="House Logo" />
      </div>

      <div className="stripinaBoxF">
        <div className="stripina2F"></div>
      </div>

      <div className="loginBoxF">
        <div className="loginHeadingF">CREATE A LISTING</div>

       
    
        <div className="loginButtonBoxF"> 
        
        <div className="inputBox">
          <div className="loginText2F">TITLE:</div>
          <input className="inputFieldF2" />
        </div>
        <div className="inputBox">
          <div className="loginText2F">PRICE:</div>
          <input className="inputFieldF2" />
        </div>
        <div className="inputBox">
          <div className="loginText2F">DESCRIPTION:</div>
          <input className="inputFieldBigF2" />
        </div>

          
        </div>
      </div>

      <div className="previewF">
        <div className="photopartF">
          <div className="photoboxF"></div>
          <div className="miniphotosF">
            <div className="miniimageF"></div>
            <div className="miniimageF"></div>
            <div className="miniimageF"></div>
            <div className="miniimageF"></div>
            <div className="miniimageF"></div>
          </div>
        </div>

        <div className="photopartF">
          <div className="nameboxF">
            <div className="loginHeadingF">NAME</div>
            <div className="stripinaBox2F">
              <div className="stripina3F"></div>
            </div>
            <div className="loginHeadingF">DESCRIPTION</div>
            <div className="stripinaBox2F">
              <div className="stripina3F"></div>
            </div>
            <div className="houseinfoF">
              <div className="logintext2F">SELLER:</div>
              <div className="logintext2F">JEVGENIJS VELVELIS</div>
              <div className="logintext2F">PRICE:</div>
              <div className="logintext2F">30000000$</div>
              <div className="logintext2F">AVAILABLE:</div>
              <div className="logintext2F">YES</div>
            </div>
            <div className="buttonboxF">
              <button className="ssubmitButtonF">ADDITIONAL INFO</button>
              <button className="ssubmitButtonF">CONTACT SELLER</button>
            </div>
          </div>
        </div>
      </div>

      <div className="loginButtonBoxF">
        <div className="infoBoxF">
          <div className="loginHeadingF2">ADDITIONAL INFORMATION</div>
          <div className="loginTextF">AREA:</div>
          <input className="inputFieldF" />
          <div className="loginTextF">LAND AREA:</div>
          <input className="inputFieldF" />
          <div className="loginTextF">ROOMS:</div>
          <input className="inputFieldF" />
          <div className="loginTextF">BEDROOMS:</div>
          <input className="inputFieldF" />
          <div className="loginTextF">BATHROOMS:</div>
          <input className="inputFieldF" />
          <div className="loginTextF">PROPERTY TYPE:</div>
          <input className="inputFieldF" />
          <button className="submitButtonF">UPLOAD</button>
        </div>
      </div>
    </div>
  );
}

export default FakePreview;