import React, { useState } from 'react';

const ImageUploader = () => {
  const [imageLink, setImageLink] = useState('');
  const [imageLinksArray, setImageLinksArray] = useState([]);
//   const [latestImage, setLatestImage] = useState('');

  const handleInputChange = (event) => {
    setImageLink(event.target.value);
  };

  const handleAddImage = () => {
    if (imageLink.trim() !== '') {
      setImageLinksArray([...imageLinksArray, imageLink]);
    //   setLatestImage(imageLink);
      setImageLink('');
    }
  };

  return (
    <>
        {/* {imageLinksArray.map((link, index) => (
          <div key={index}>
            <img src={link} alt={`Image ${index + 1}`} style={{ width: '100px', height: '100px' }} />
          </div>
        ))} */}
        <div className='imageUploadDividingF2'>
          <input
            type="text"
            className='inputFieldF2'
            placeholder="Enter Image Link"
            value={imageLink}
            onChange={handleInputChange}
          />
          <button className='imageUploadAddF2' onClick={handleAddImage}>Add</button>
        </div>

        <div className="imagePreviews">
          {imageLink && (
            <div className="imagePreview">
              <img src={imageLink} alt="Uploaded Image" style={{width: '150px', height: '150px'}}/>
            </div>
          )}
        </div>
    </>
  );
};

export default ImageUploader;
