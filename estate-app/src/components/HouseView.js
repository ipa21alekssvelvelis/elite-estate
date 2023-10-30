import React, { useState } from 'react';
import '../styles/StylesMain2.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/image1.jpg';
import Menu from './Menu';
import OpenDivs from './OpenDivs';

function HouseView() {
  const [additionalVisible, setAdditionalVisible] = useState('none');
  const [contactVisible, setContactVisible] = useState('none');

  const openDiv = () => {
    setAdditionalVisible('flex');
  };

  const openDiv2 = () => {
    setContactVisible('flex');
  };

  return (
    <>
      <Menu />
      <OpenDivs openDiv={openDiv} openDiv2={openDiv2} />
      <div class="topHeading">
        <div class="mainHeadingTextBox">
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
              <button className="buttonMAIN2" onClick={OpenDivs.openDiv}>
                ADDITIONAL INFO
              </button>
              <button className="buttonMAIN2" onClick={OpenDivs.openDiv2}>
                CONTACT SELLER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HouseView;
