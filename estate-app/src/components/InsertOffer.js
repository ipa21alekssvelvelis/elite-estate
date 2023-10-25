import React, { useState } from 'react';
import '../styles/App.css';

function InsertOffer(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [RoomCount, setRoomCount] = useState('');
    const [BathroomCount, setBathroomCount] = useState('');
    const [BedroomCount, setBedroomCount] = useState('');
    const [size, setSize] = useState('');
    const [AreaSize, setAreaSize] = useState('');
    const [price, setPrice] = useState('');
    const [HouseType, setHouseType] = useState('');

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
}

export default InsertOffer;