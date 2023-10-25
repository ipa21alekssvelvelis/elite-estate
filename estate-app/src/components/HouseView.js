import React, { useState } from 'react';
import '../styles/StylesAll.css';
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

      <div class="midContainer">
        <div class="leftContainer">
          <section class="imageBox swiper mySwiper">
            <div class="wrapper swiper-wrapper">
              <div class="slide">
                <img src={image2} alt="" class="image" />
              </div>
            </div>
          </section>
          <div class="underImg">
            <a href="" class="smallImageBox"></a>
            <a href="" class="smallImageBox"></a>
            <a href="" class="smallImageBox"></a>
            <a href="" class="smallImageBox"></a>
            <a href="" class="smallImageBox"></a>
          </div>
        </div>

        <div class="rightContainer">
          <div class="box">
            <div class="boxHeading">MEGA MANSION FORTNITE</div>
            <div class="descriptionBox">
              <div class="descTextBox">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                omnis sit dicta exercitationem mollitia id! Accusamus incidunt,
                quo illo facere at, a assumenda saepe autem qui corrupti sint quae
                eligendi?
              </div>
            </div>
            <div class="aboutBox">
              <div class="singleBox">
                <div class="aboutNameHead">FULL NAME:</div>
                <div class="aboutName">JENATOLIJS IVANOVS</div>
              </div>
              <div class="singleBox">
                <div class="aboutNameHead">PRICE:</div>
                <div class="aboutName">13 000 000 $</div>
              </div>
              <div class="singleBox">
                <div class="aboutNameHead">AVAILABLE VISIT:</div>
                <div class="aboutName">YES</div>
              </div>
            </div>

            <div class="buttonBox">
              <button className="button" onClick={OpenDivs.openDiv}>
                ADDITIONAL INFO
              </button>
              <button className="button" onClick={OpenDivs.openDiv2}>
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
