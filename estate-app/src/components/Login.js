import React, { useState } from 'react';
import '../styles/stylesL.css';
import Cookies from 'js-cookie';
import image from '../assets/image-removebg-preview.png' 

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({});
    const isAuthenticated = Cookies.get('userID');
    const isFirstTime = Cookies.get('sellerID');
    console.log(isAuthenticated);
    const handleUsernameChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedUsername = user.trim();
        const trimmedPassword =  pass.trim();
        const newErrors = {};

        if(!trimmedUsername){
          newErrors.user = 'Username is required.';
        }else if(trimmedUsername.length > 40){
          newErrors.user = 'Username must be 40 characters or less.'
        }

        if(!trimmedPassword){
          newErrors.pass = 'Password is required.';
        }
        if (Object.keys(newErrors).length === 0) {
        try {
          const response = await fetch('http://localhost:8888/datubazes/estates/utilities/userLogin.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user, password: pass }),
          });
    
          if (response.ok) {
            const data = await response.json();
            if (data.error) {
              if(data.error == 'Password is incorrect'){
                newErrors.pass = 'Password is incorrect';
                setErrors(newErrors);
              }else{
                newErrors.user = "User doesn't exist";
                setErrors(newErrors);
              }
            } else {
              if(data.sellerid){
                Cookies.set('sellerID', data.sellerid, { expires: 0.25});
              }
              Cookies.set('userID', data.userid, { expires: 0.25 });
              window.location.href = 'http://localhost:3000';
            }
          } else {
            console.error('Submission failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }else{
        setErrors(newErrors);
      }
    }

    return(
        <>
            {/* <Menu/> */}
<<<<<<< HEAD
            <div class="topHeading">
        <div class="mainHeadingTextBox">
          <img class="img1" src="/assets/image-removebg-preview.png" alt=""/>
        </div>
      </div>
      <div class="midLine"></div>
      <div class="underMid">
        <div class="smallBox">
          <div class="mainHeadingTextBox2">
            <img src="/assets/editaprofile.png" alt=""/>
          </div>
        </div>
      </div>
      <div class="midLine2"></div>
    <form className="loginBox" onSubmit={handleSubmit}>
      <div className="loginHeading">LOGIN</div>
      <div className="loginMidBox">
        <div className="inputGroupLogin">
          <div className="inputHeading">USERNAME</div>
          <input className="inputField" 
=======
            <div class="topHeadingLOG">
        <div class="mainHeadingTextBoxLOG">
          <a href="index.html">
            <img src={image} alt="" />
          </a>
        </div>
      </div>
    <form className="loginBoxLOG" onSubmit={handleSubmit}>
      <div className="loginHeadingLOG">LOGIN</div>
      <div className="loginMidBoxLOG">
        <div className="inputGroupLoginLOG">
          <div className="inputHeadingLOG">USERNAME</div>
          <input className="inputFieldLOG" 
>>>>>>> c43a6358cfebca7f9e88794f1e9e0577808e377c
          type="text" 
          id='username' 
          name='password'
          onChange={handleUsernameChange}/>
          {errors.user && <p className="error" id='usererror'>{errors.user}</p>}
        </div>
        <div className="inputGroupLoginLOG">
          <div className="inputHeadingLOG">PASSWORD</div>
          <input 
          className="inputFieldLOG" 
          type="password" 
          id='password' 
          name='password'
          onChange={handlePasswordChange}/>
          {errors.pass && <p className="error" id='passerror'>{errors.pass}</p>}
        </div>
      </div>
      <div className="loginButtonBoxLOG">
        <button type='submit' className="submitButtonLOG">LOGIN</button>
        <div className="registerCallLOG">
          <a href={`/register`}>CREATE A NEW ACCOUNT</a>
        </div>
      </div>
    </form>              
    </>
    )     
}

export default Login;