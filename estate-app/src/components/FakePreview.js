import React, { useState } from 'react';
import '../styles/StylesFake.css';
import image from '../assets/sellAhouse.png';
import image2 from '../assets/image-removebg-preview.png';
import Menu from '../components/Menu.js';
import ImageUploader from '../components/ImageUploader';
import Cookies from 'js-cookie';

function FakePreview() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [RoomCount, setRoomCount] = useState('');
    const [BathroomCount, setBathroomCount] = useState('');
    const [BedroomCount, setBedroomCount] = useState('');
    const [size, setSize] = useState('');
    const [AreaSize, setAreaSize] = useState('');
    const [price, setPrice] = useState('');
    const [HouseType, setHouseType] = useState('');
    const [errors, setErrors] = useState({});

    const isAuthenticated = Cookies.get('userID');
    const isSeller = Cookies.get('sellerID');
    console.log(isAuthenticated);
    console.log(isSeller);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleRoomCountChange = (e) => {
        setRoomCount(e.target.value);
    };

    const handleBathroomCountChange = (e) => {
        setBathroomCount(e.target.value);
    };

    const handleBedroomCountChange = (e) => {
        setBedroomCount(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleAreaSizeChange = (e) => {
        setAreaSize(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleHouseTypeChange = (e) => {
        setHouseType(e.target.value);
    };

    let newErrors = {};
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedRoomCount = RoomCount.trim();
    const trimmedBathroomCount = BathroomCount.trim();
    const trimmedBedroomCount = BedroomCount.trim();
    const trimmedPrice = price.trim();
    const trimmedSize = size.trim();
    const trimmedAreaSize = AreaSize.trim();
    const trimmedHouseType = HouseType.trim();

    const [imageLinks, setImageLinks] = useState([]);
    const [imageLink, setImageLink] = useState('');

    const [message, setMessage] = useState('');

    const handleImageLinkChange = (e) => {
        setImageLink(e.target.value);
    };

    const handleAddImage = (e) => {
        e.preventDefault();

        if (imageLink.trim() !== '') {
            setImageLinks([...imageLinks, imageLink]);
            setImageLink('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!trimmedTitle) {
            newErrors.title = 'Title is required.';
        }

        if (!trimmedDescription) {
            newErrors.description = 'Description is required.';
        }

        if (!trimmedRoomCount) {
            newErrors.RoomCount = 'Room count is required.';
        }

        if (!trimmedBathroomCount) {
            newErrors.BathroomCount = 'Bathroom count is required.';
        }

        if (!trimmedBedroomCount) {
            newErrors.BedroomCount = 'Bedroom count is required.';
        }

        if (!trimmedSize) {
            newErrors.size = 'Size is required.';
        }

        if (!trimmedAreaSize) {
            newErrors.AreaSize = 'Area size is required.';
        }

        if (!trimmedPrice) {
            newErrors.price = 'Price is required.';
        }

        if (!trimmedHouseType) {
            newErrors.HouseType = 'House type is required.';
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const filteredImageLinks = imageLinks.filter(link => typeof link === 'string' && link.trim() !== '');
                const response = await fetch('http://localhost:8888/datubazes/estate-main/elite-estate/utilities/insertOffer.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: trimmedTitle,
                        desc: trimmedDescription,
                        RoomCount: trimmedRoomCount,
                        BathroomCount: trimmedBathroomCount,
                        BedroomCount: trimmedBedroomCount,
                        price: trimmedPrice,
                        HouseType: trimmedHouseType,
                        size: trimmedSize,
                        areaSize: trimmedAreaSize,
                        sellerID: isSeller,
                        imageLinks: filteredImageLinks,
                        userID: isAuthenticated,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Update personal response:', data);
                    if (data.errors) {
                        // if(data.errors.email){
                        //     newErrors.editEmail = data.errors.email;
                        //     setErrors(newErrors);
                        // }
                        // if(data.errors.phone){
                        //     newErrors.editPhone = data.errors.phone;
                        //     setErrors(newErrors);
                        // }
                    } else {
                        console.log('Data submitted successfully');
                        newErrors = {};
                        setErrors(newErrors);
                        setMessage('Offer posted!');
                        // window.location.href = 'http://localhost:3000';
                    }
                } else {
                    console.error('Submission failed');
                }
            } catch (errors) {
                console.error('Error:', errors);
            }
        } else {
            setErrors(newErrors);
        }
    };

  return (
    <>
        <Menu/>
        <form className="containerF" onSubmit={handleSubmit}>
        <div className="topHeadingF">
            <div className="mainHeadingTextBoxF">
            <img className="imgFAKE" src={image2} alt="Main Logo" />
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
                <div className="loginButtonBoxF"> 
                    <div className="inputBox">
                        <div className="loginText2F">TITLE:</div>
                        <input className="inputFieldF2" value={title} onChange={handleTitleChange} />
                        {errors.title && <p className="error">{errors.title}</p>}
                    </div>
                    <div className="inputBox">
                        <div className="loginText2F">PRICE:</div>
                        <input type='number' className="inputFieldF2" value={price} onChange={handlePriceChange} />
                        {errors.price && <p className="error">{errors.price}</p>}
                    </div>
                    <div className="inputBox">
                        <div className="loginText2F">DESCRIPTION:</div>
                        <input className="inputFieldBigF2" value={description} onChange={handleDescriptionChange} />
                        {errors.description && <p className="error">{errors.description}</p>}
                    </div>
                </div>
            </div>
        </div>

        <div className="previewF">
                <div className='photopartF'>
                    <div className='loginHeadingF'>IMAGE UPLOAD</div>
                    <div className='imageUploadHeadingF2'>Enter an image URL and preview it, if it looks good - upload it</div>
                    <input
                        className="inputFieldF2"
                        value={imageLink}
                        onChange={handleImageLinkChange}
                        placeholder="Image URL"
                    />
                    <button className='imageUploadAddF2' onClick={handleAddImage}>Add</button>
                    {/* <div className="imagePreviews">
                        {imageLinks.map((link, index) => (
                            <div key={index} className="imagePreview">
                                <img className='' src={link} alt={`Uploaded Image ${index}`} />
                            </div>
                        ))}
                    </div> */}
                    <div className="previewImages">
                        <div className="imagePreviews">
                            {imageLink && (
                                <img src={imageLink} alt="Preview" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="loginButtonBoxF">
                <div className="infoBoxF">
                    <div className="loginHeadingF2">ADDITIONAL INFORMATION</div>
                    <div className="loginTextF">AREA:</div>
                    <input type='number' className="inputFieldF" value={size} onChange={handleSizeChange} />
                    {errors.size && <p className="errorF">{errors.size}</p>}
                    <div className="loginTextF">LAND AREA:</div>
                    <input type='number' className="inputFieldF" value={AreaSize} onChange={handleAreaSizeChange} />
                    {errors.AreaSize && <p className="errorF">{errors.AreaSize}</p>}
                    <div className="loginTextF">ROOMS:</div>
                    <input type='number' className="inputFieldF" value={RoomCount} onChange={handleRoomCountChange} />
                    {errors.RoomCount && <p className="errorF">{errors.RoomCount}</p>}
                    <div className="loginTextF">BEDROOMS:</div>
                    <input type='number' className="inputFieldF" value={BedroomCount} onChange={handleBedroomCountChange} />
                    {errors.BedroomCount && <p className="errorF">{errors.BedroomCount}</p>}
                    <div className="loginTextF">BATHROOMS:</div>
                    <input type='number' className="inputFieldF" value={BathroomCount} onChange={handleBathroomCountChange} />
                    {errors.BathroomCount && <p className="errorF">{errors.BathroomCount}</p>}
                    <div className="loginTextF">PROPERTY TYPE:</div>
                    <input className="inputFieldF" value={HouseType} onChange={handleHouseTypeChange} />
                    {errors.HouseType && <p className="errorF">{errors.HouseType}</p>}
                    <button className="submitButtonF" type='submit'>UPLOAD</button>
                    {message}
                </div>
            </div>
        </form>
    </>
  );
}

export default FakePreview;