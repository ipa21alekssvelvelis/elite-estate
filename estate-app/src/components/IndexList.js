import React, { useState, useEffect } from 'react';
import '../styles/StylesMain.css';
import { Link } from 'react-router-dom';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/buyAHouse.png';
import Menu from '../components/Menu.js';
import Cookies from 'js-cookie';

function IndexList() {
    const isAuthenticated = Cookies.get('userID');
    const isSeller = Cookies.get('sellerID');
    const [houses, setHouses] = useState([]);
    const [sortedHouses, setSortedHouses] = useState([]);
    const [sortBy, setSortBy] = useState('title');

    useEffect(() => {
        async function fetchHouses() {
            try {
                const response = await fetch('http://localhost:8888/datubazes/estate-main/elite-estate/utilities/getOffers.php');
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.offers) {
                        setHouses(data.offers); // Update here
                        setSortedHouses(data.offers); // Update here
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
    }, []);
    

    const handleSortChange = (e) => {
        const selectedSortBy = e.target.value;
        setSortBy(selectedSortBy);
        sortHouses(selectedSortBy);
    };

    const sortHouses = (criteria) => {
        const sorted = [...houses];
        if (criteria === 'title') {
            sorted.sort((a, b) => a.nosaukums.localeCompare(b.nosaukums));
        } else if (criteria === 'priceASC') {
            sorted.sort((a, b) => a.cena - b.cena);
        } else if (criteria === 'priceDESC') {
            sorted.sort((a, b) => b.cena - a.cena);
        }
        setSortedHouses(sorted);
    };

    return (
        <>
            <Menu />
            <div className="container">
                <div className="topHeadingMAIN">
                    <div className="mainHeadingTextBoxMAIN">
                        <img className="image1" src={image} alt="ddd" />
                    </div>
                </div>
                <div className="midLineMAIN"></div>
                <div className="underMidMAIN">
                    <div className="smallBoxMAIN">
                        <div className="mainHeadingTextBox2MAIN">
                            <img className="image2" src={image2} alt="Buy a House" />
                        </div>
                    </div>
                </div>
                <div className="midLine2MAIN"></div>
                <div className="sortDropdownContainer">
                    <select className="sortDropdown" value={sortBy} onChange={handleSortChange}>
                        <option value="title">Sort by Title</option>
                        <option value="priceASC">Sort by Price (ASC)</option>
                        <option value="priceDESC">Sort by Price (DESC)</option>
                    </select>
                </div>
                <div className="listBoxMAIN">
                {(sortedHouses && sortedHouses.length > 0) ? (
    sortedHouses.map((house) => (
        <div key={house.ipasumaid} className="listBigBoxMAIN">
            <Link to={`/houseView/${house.ipasumaid}`} className="listBoxTopMAIN">
                <img className='overlayImageForIndexMAIN' src={house.images[0]} alt={house.nosaukums} />
            </Link>
            <a className="listBoxBotMAIN">{`${house.nosaukums}`}</a>
            <a className="listBoxBotMAIN">{`${house.cena} $`}</a>
        </div>
    ))
) : (
    houses.map((house) => (
        <div key={house.ipasumaid} className="listBigBoxMAIN">
            <Link to={`/houseView/${house.ipasumaid}`} className="listBoxTopMAIN">
                <img className='overlayImageForIndexMAIN' src={house.images[0]} alt={house.nosaukums} />
            </Link>
            <a className="listBoxBotMAIN">{`${house.nosaukums}`}</a>
            <a className="listBoxBotMAIN">{`${house.cena} $`}</a>
        </div>
    ))
)}

                </div>
            </div>
        </>
    );
}

export default IndexList;
