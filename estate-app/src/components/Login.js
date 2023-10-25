import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/StylesLogin.css';
import image from '../assets/image-removebg-preview.png';
import Menu from './Menu.js';

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({});

    const handleUsernameChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
    };

    return(
       
            <>
        
        
            <Menu/>
        
                <div className="topHeading">
                    <div className="mainHeadingTextBox">
                        <img src={image} alt="dasd"/>
                    </div>
                </div>
                <div className="loginBox">
                    <div className="loginHeading">LOGIN</div>
                    <div className="loginMidBox">
                        <div className="inputGroup">
                            <div className="inputHeading">USERNAME</div>
                            <input className="inputField" type="text"/>
                        </div>
                        <div className="inputGroup">
                            <div className="inputHeading">PASSWORD</div>
                            <input className="inputField" type="text"/>
                        </div>
                    </div>
                    <div className="loginButtonBox">
                        <button className="submitButton">LOGIN</button>
                        <div className="registerCall"><a href="register.html">CREATE A NEW ACCOUNT</a></div>
                    </div>
                </div>

                
                </>
            )
      
}

export default Login;