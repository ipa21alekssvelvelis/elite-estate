import React, { useState } from 'react';
import '../styles/StylesMain2.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/image1.jpg';
import Menu from './Menu';
import AdditionalInfo from './AdditionalInfo.js'
import ContactSeller from './ContactSeller.js';

function HouseView() {
  const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);

  // Function to toggle the additional information
  function toggleAdditionalInfo() {
    setAdditionalInfoVisible(!additionalInfoVisible);
  }
  const [contactSellerVisible, setContactSellerVisible] = useState(false);

  // Function to toggle the "Contact Seller" component
  function toggleContactSeller() {
    setContactSellerVisible(!contactSellerVisible);
  }

  return (
    <>
      <Menu />
   
      


      

      <div class="topHeadingMAIN2">
        <div class="mainHeadingTextBoxMAIN2">
          <a href="index.html">
            <img src={image} alt="" />
          </a>
        </div>
      </div>

      <div class="midContainerMAIN2">
        <div class="leftContainerMAIN2">
          <section class="imageBoxMAIN2 swiperMAIN2 mySwiperMAIN2">
            <div class="wrapperMAIN2 swiper-wrapperMAIN2">
              <div class="slideMAIN2">
                <img src={image2} alt="" class="imageMAIN2" />
              </div>
            </div>
          </section>
          <div class="underImgMAIN2">
            <a href="" class="smallImageBoxMAIN2"></a>
            <a href="" class="smallImageBoxMAIN2"></a>
            <a href="" class="smallImageBoxMAIN2"></a>
            <a href="" class="smallImageBoxMAIN2"></a>
            <a href="" class="smallImageBoxMAIN2"></a>
          </div>
        </div>

        <div class="rightContainerMAIN2">
          <div class="boxMAIN2">
            <div class="boxHeadingMAIN2">MEGA MANSION FORTNITE</div>
            <div class="descriptionBoxMAIN2">
              <div class="descTextBoxMAIN2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                omnis sit dicta exercitationem mollitia id! Accusamus incidunt,
                quo illo facere at, a assumenda saepe autem qui corrupti sint quae
                eligendi?
              </div>
            </div>
            <div class="aboutBoxMAIN2">
              <div class="singleBoxMAIN2">
                <div class="aboutNameHeadMAIN2">FULL NAME:</div>
                <div class="aboutNameMAIN2">JENATOLIJS IVANOVS</div>
              </div>
              <div class="singleBoxMAIN2">
                <div class="aboutNameHeadMAIN2">PRICE:</div>
                <div class="aboutNameMAIN2">13 000 000 $</div>
              </div>
              <div class="singleBoxMAIN2">
                <div class="aboutNameHeadMAIN2">AVAILABLE VISIT:</div>
                <div class="aboutNameMAIN2">YES</div>
              </div>
            </div>

            <div class="buttonBoxMAIN2">
            <button className="buttonMAIN2" onClick={toggleAdditionalInfo}>
              {/* <button className="buttonMAIN2" onClick={() => setAdditionalInfoVisible(true)}> */}
                ADDITIONAL INFO
              </button>
              <button className="buttonMAIN2" onClick={toggleContactSeller}>
                CONTACT SELLER
              </button>
            </div>
          </div>
        </div>
         {additionalInfoVisible && <AdditionalInfo />}
         {contactSellerVisible && <ContactSeller />}
      </div>
    </>
  );
}

export default HouseView;
