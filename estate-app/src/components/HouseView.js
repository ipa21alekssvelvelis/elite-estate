import React, { useState, useEffect } from 'react';
import '../styles/StylesMain2.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/image1.jpg';
import Menu from './Menu';
import AdditionalInfo from './AdditionalInfo.js';
import DeleteOffer from './DeleteOffer';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

function HouseView() {
  const [houseData, setHouseData] = useState(null);
  const [additionalInfoVisible, setAdditionalInfoVisible] = useState(false);
  const [contactSellerVisible, setContactSellerVisible] = useState(false);
  const [editOfferVisible, setEditOfferVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);


  const displayImage = (index) => {
    const imageToDisplay = houseData.images[index];
    setDisplayedImage(imageToDisplay);
  };
  const [displayedImage, setDisplayedImage] = useState(houseData ? houseData.images[0] : '');

  const isAuthenticated = Cookies.get('userID');
  const isSeller = Cookies.get('sellerID');
  // const sellerID = Cookies.get('sellerID');
  const [loggedInProper, setLoggedIn] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await fetch(`http://localhost:8888/datubazes/estate-main/elite-estate/utilities/getCertainOffer.php?id=${id}&isAuthenticated=${isAuthenticated}&isSeller=${isSeller}`);
        if (response.ok) {
          const data = await response.json();
          if (data) {
            console.log(data);
            setHouseData(data);
            if (data.images && data.images.length > 0) {
              setDisplayedImage(data.images[0]);
            }
            // const sellerID = data.sellerid;
            // const sellerID = Cookies.get('sellerID');
            // if(sellerID && loggedInSellerID && sellerID === loggedInSellerID){
            //   setLoggedIn(true);
            // }
          } else {
            console.error('Fetched data is not an array:', data);
          }
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchHouses();
  }, [id, isAuthenticated, isSeller]);
  

  const onDeleteTask = async (id) => {
    try {
        const response = await fetch(`http://localhost:8888/datubazes/task_management/utilities/deleteTask.php?id=${id}`, {
          method: 'GET',
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Offer deleted successfully');
          console.log(data);
          window.location.href = 'http://localhost:3000';
        } else {
          console.error('Offer deletion failed');
        }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function toggleAdditionalInfo() {
    setAdditionalInfoVisible(!additionalInfoVisible);
    setOverlayVisible(!overlayVisible);
  }

  function toggleContactSeller() {
    setContactSellerVisible(!contactSellerVisible);
    setOverlayVisible(!overlayVisible);
  }

  function toggleEditOffer() {
    setEditOfferVisible(!editOfferVisible);
    setOverlayVisible(!overlayVisible);
  }

  const [editTitle, setTitleEdit] = useState('');
  const [editDescription, setDescriptionEdit] = useState('');
  const [editRoomCount, setRoomCountEdit] = useState('');
  const [editBathroomCount, setBathroomCountEdit] = useState('');
  const [editBedroomCount, setBedroomCountEdit] = useState('');
  const [editSize, setSizeEdit] = useState('');
  const [editAreaSize, setAreaSizeEdit] = useState('');
  const [editPrice, setPriceEdit] = useState('');
  const [editHouseType, setHouseTypeEdit] = useState('');
  const [editAvailable, setAvailableEdit] = useState(false);

  const handleTitleChange = (e) => {
      setTitleEdit(e.target.value);
  };

  const handleDescriptionChange = (e) => {
      setDescriptionEdit(e.target.value);
  };

  const handleRoomCountChange = (e) => {
      setRoomCountEdit(e.target.value);
  };

  const handleBathroomCountChange = (e) => {
      setBathroomCountEdit(e.target.value);
  };

  const handleBedroomCountChange = (e) => {
      setBedroomCountEdit(e.target.value);
  };

  const handleSizeChange = (e) => {
      setSizeEdit(e.target.value);
  };

  const handleAreaSizeChange = (e) => {
      setAreaSizeEdit(e.target.value);
  };

  const handlePriceChange = (e) => {
      setPriceEdit(e.target.value);
  };

  const handleHouseTypeChange = (e) => {
      setHouseTypeEdit(e.target.value);
  };

  const handleAvailableChange = (e) => {
      setAvailableEdit(e.target.value);
  };

  return (
    <>
      <Menu />

      <div className="topHeadingMAIN2">
        <div className="mainHeadingTextBoxMAIN2">
          <a href="index.html">
            <img className="" src={image} alt="" />
          </a>
        </div>
      </div>

      <div className="midContainerMAIN2">
        <div className="leftContainerMAIN2">
          <section className="imageBoxMAIN2 swiperMAIN2 mySwiperMAIN2">
            <div className="wrapperMAIN2 swiper-wrapperMAIN2">
              <div className="slideMAIN2">
                <img src={displayedImage.image_url} alt="" className="imageMAIN2" />
              </div>
            </div>
          </section>
          <div className="underImgMAIN2">
            {houseData &&
              houseData.images.map((image, index) => (
                <a key={index} onClick={() => displayImage(index)} className="smallImageBoxMAIN2">
                  <img src={image.image_url} alt={`Image ${index}`} className="smallImage" />
                </a>
              ))}
          </div>
        </div>

        <div className="rightContainerMAIN2">
          <div className="boxMAIN2">
            <div className="boxHeadingMAIN2">{houseData ? houseData.nosaukums : "House Name"}</div>
            <div className="descriptionBoxMAIN2">
              <div className="descTextBoxMAIN2">
              {houseData ? houseData.apraksts : "House Description"}
              </div>
            </div>
            <div className="aboutBoxMAIN2">
              <div className="singleBoxMAIN2">
                <div className="aboutNameHeadMAIN2">FULL NAME:</div>
                <div className="aboutNameMAIN2">{houseData ? houseData.vards : "Full name"} {houseData ? houseData.uzvards : "Full surname"}</div>
              </div>
              <div className="singleBoxMAIN2">
                <div className="aboutNameHeadMAIN2">PRICE:</div>
                <div className="aboutNameMAIN2">{houseData ? houseData.cena : "Price"}</div>
              </div>
              <div className="singleBoxMAIN2">
                <div className="aboutNameHeadMAIN2">VISITING:</div>
                <div className="aboutNameMAIN2">{houseData ? (houseData.pieejams === 1 ? "Nav Pieejams" : "Pieejams") : "Availability"}</div>
              </div>
              {(isSeller && houseData && houseData.sellerid && isSeller === houseData.sellerid) && (
                <div className="singleBoxMAIN2">
                  <div className="aboutNameHeadMAIN2">ACTIONS:</div>
                  <DeleteOffer offerID={id} onDelete={onDeleteTask} />
                </div>
              )}
            </div>

            <div className="buttonBoxMAIN2">
              <button className="buttonMAIN2" onClick={toggleAdditionalInfo}>
                ADDITIONAL INFO
              </button>
              <button className="buttonMAIN2" onClick={toggleContactSeller}>
                CONTACT SELLER
              </button>
            </div>
          </div>
        </div>
      </div>

      {additionalInfoVisible && (
        <div className="hiddenAdditionalMAIN2" id="invisID">
          <div className="additionalHeadingMAIN2">ADDITIONAL INFORMATION</div>
          <button id="closeButton" className="closeButtonMAIN2" onClick={toggleAdditionalInfo}></button>
          <div className="infoBoxMAIN2">
            <div className="mainInfoBoxMAIN2">
              <div className="labelMAIN2">AREA SIZE:</div>
              <div className="informationMAIN2">{houseData ? houseData.platiba : "Area size"}</div>
            </div>
            <div className="mainInfoBoxMAIN2">
              <div className="labelMAIN2">BEDROOMS:</div>
              <div className="informationMAIN2">{houseData ? houseData.gulamistabuSk : "Bedrooms"}</div>
            </div>
            <div className="mainInfoBoxMAIN2">
              <div className="labelMAIN2">LAND AREA:</div>
              <div className="informationMAIN2">{houseData ? houseData.lauks : "Land area"}</div>
            </div>
            <div className="mainInfoBoxMAIN2">
              <div className="labelMAIN2">BATHROOMS:</div>
              <div className="informationMAIN2">{houseData ? houseData.tualesuSk : "Bathrooms"}</div>
            </div>
            <div className="mainInfoBoxMAIN2">
              <div className="labelMAIN2">ROOMS:</div>
              <div className="informationMAIN2">{houseData ? houseData.istabuSk : "Rooms"}</div>
            </div>
            <div className="mainInfoBoxMAIN2">
              <div className="labelMAIN2">PROPERTY TYPE:</div>
              <div className="informationMAIN2">{houseData ? houseData.majasTips : "Property type"}</div>
            </div>
          </div>
        </div>
      )}

      {contactSellerVisible && (
        <div className="hiddenContactMAIN2" id="invisID2">
          <div className="additionalHeadingMAIN2">CONTACT SELLER</div>
          <button id="closeButton" className="closeButtonMAIN2" onClick={toggleContactSeller}></button>
          <div className="infoBox2MAIN2">
            <div className="takHzMAIN2">
              <div className="hzHeadingMAIN2">PHONE NUMBER:</div>
              <div className="hzTextMAIN2">{houseData ? houseData.telefona_nr : "Phone number"}</div>
            </div>
            <div className="takHzMAIN2">
              <div className="hzHeadingMAIN2">EMAIL:</div>
              <div className="hzTextMAIN2">{houseData ? houseData.email : "Email"}</div>
            </div>
            <div className="takHzMAIN2">
              <div className="hzHeadingMAIN2">FULL NAME:</div>
              <div className="hzTextMAIN2">{houseData ? houseData.vards : "Full name"} {houseData ? houseData.uzvards : "Full surname"}</div>
            </div>
          </div>
        </div>
      )}

      {editOfferVisible && (
        <div className="hiddenAdditionalMAIN2" id="invisID">
        <div className="additionalHeadingMAIN2">ADDITIONAL INFORMATION</div>
        <button id="closeButton" className="closeButtonMAIN2" onClick={toggleEditOffer}></button>
        <div className="infoBoxMAIN2">
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">AREA SIZE:</div>
            <div className="informationMAIN2">{houseData ? houseData.platiba : "Area size"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">BEDROOMS:</div>
            <div className="informationMAIN2">{houseData ? houseData.gulamistabuSk : "Bedrooms"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">LAND AREA:</div>
            <div className="informationMAIN2">{houseData ? houseData.lauks : "Land area"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">BATHROOMS:</div>
            <div className="informationMAIN2">{houseData ? houseData.tualesuSk : "Bathrooms"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">ROOMS:</div>
            <div className="informationMAIN2">{houseData ? houseData.istabuSk : "Rooms"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">PROPERTY TYPE:</div>
            <div className="informationMAIN2">{houseData ? houseData.majasTips : "Property type"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">BATHROOMS:</div>
            <div className="informationMAIN2">{houseData ? houseData.tualesuSk : "Bathrooms"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">ROOMS:</div>
            <div className="informationMAIN2">{houseData ? houseData.istabuSk : "Rooms"}</div>
          </div>
          <div className="mainInfoBoxMAIN2">
            <div className="labelMAIN2">PROPERTY TYPE:</div>
            <div className="informationMAIN2">{houseData ? houseData.majasTips : "Property type"}</div>
          </div>
        </div>
      </div>
      )}
      {overlayVisible && <div id="overlay" className="overlayMAIN2"></div>}
    </>
  );
}

export default HouseView;
