import React, { useState } from 'react';
import '../styles/App.css';

function UpdateOffer(){

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
}

export default UpdateOffer;