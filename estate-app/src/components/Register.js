import React, { useState } from 'react';
import '../styles/StylesReg.css';
import image from '../assets/image-removebg-preview.png';
import Menu from './Menu.js';

function Register(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState({});

    const handleUsernameChange = (e) => {
        setUser(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
    }

    const handleConfirmChange = (e) => {
        setConfirm(e.target.value);
    }

    return(
        <>


<Menu/>


        <div className="topHeading">
            <div className="mainHeadingTextBox">
                <img src={image} alt=""/>
            </div>
        </div>
        <div className="loginBox">
            <div className="loginHeading">REGISTER</div>
            <div className="loginMidBox">
                <div className="inputGroup1">
                    <div className="inputHeading">USERNAME</div>
                    <input className="inputField" type="text"/>
                </div>
                <div className="inputGroup2">
                    <div className="inputHeading">PASSWORD</div>
                    <input className="inputField" type="text"/>
                </div>
                <div className="inputGroup">
                    <div className="inputHeading">REPEAT PASSWORD</div>
                    <input className="inputField" type="text"/>
                </div>
            </div>
            <div className="loginButtonBox">
                <button className="submitButton">REGISTER</button>
                <div className="registerCall"><a href="./Login.js">ALREADY HAVE AN ACCOUNT</a></div>
            </div>
        </div>
        </>
    );
    
}


export default Register;