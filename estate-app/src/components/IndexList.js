import React from 'react';
import '../styles/StylesMain.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/buyAHouse.png';
import Menu from '../components/Menu.js';

function IndexList() {
    return (
        <>
            <Menu />
            <div className="container">
                <div className="topHeadingMAIN">
                    <div className="mainHeadingTextBoxMAIN">
                        <img src={image} alt="ddd" />
                    </div>
                </div>
                <div className="midLineMAIN"></div>
                <div className="underMidMAIN">
                    <div className="smallBoxMAIN">
                        <div className="mainHeadingTextBox2MAIN">
                            <img src={image2} alt="Buy a House" />
                        </div>
                    </div>
                </div>
                <div className="midLine2MAIN"></div>
                <button className="sortButtonMAIN">SORT</button>
                <div className="listBoxMAIN">
                    <div className="listBigBoxMAIN">
                        <a href="/html_files/houseView.html" className="listBoxTopMAIN"></a>
                        <a className="listBoxBotMAIN">30 000 000 $</a>
                    </div>
                    <div className="listBigBoxMAIN">
                        <a href="/html_files/houseView.html" className="listBoxTopMAIN"></a>
                        <a className="listBoxBotMAIN">30 000 000 $</a>
                    </div>
                    <div className="listBigBoxMAIN">
                        <a href="/html_files/houseView.html" className="listBoxTopMAIN"></a>
                        <a className="listBoxBotMAIN">30 000 000 $</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexList;
