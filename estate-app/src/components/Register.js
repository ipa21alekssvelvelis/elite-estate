import React, { useState } from 'react';
import '../styles/stylesReg.css';
import image from '../assets/image-removebg-preview.png';

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


    const handleSubmit = async (event) => {
         event.preventDefault();
        const trimmedUsername = user.trim();
        const trimmedPassword =  pass.trim();
        const trimmedConfirm =  confirm.trim();
        const newErrors = {};

        if(!trimmedUsername){
          newErrors.user = 'Username is required.';
        }

        if(!trimmedPassword){
          newErrors.pass = 'Password is required.';
          newErrors.match = "";
        }

        if(!trimmedConfirm){
          newErrors.confirm = 'Confirm is required.';
          newErrors.match = "";
        }

        if (trimmedConfirm !== trimmedPassword) {
          newErrors.match = "Passwords don't match";
        }

        if (Object.keys(newErrors).length === 0) {
        try {
          const response = await fetch('http://localhost:8888/datubazes/estates/utilities/insertUsers.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user, password: pass }),
          });
    
          if (response.ok) {
            const data = await response.json();
            if (data.error) {
              console.error('Error:', data.error);
              newErrors.user = 'Username taken';
              setErrors(newErrors);
            } else {
              console.log('Data submitted successfully');
              console.log(data);
              window.location.href = 'http://localhost:3000/login';
            }
          } else {
            console.error('Submission failed');
          }
        } catch (error) {
          console.error('Error:', error);
          newErrors.taken = 'Username taken';
          setErrors(newErrors);
        }
      }else{
        setErrors(newErrors);
      }
    }

    return(
        <>
{/* <Menu/> */}

<div class="topHeadingREG">
        <div class="mainHeadingTextBoxREG">
          <img class="img1REG" src={image} alt=""/>
        </div>
      </div>
      <div class="midLineREG"></div>

<form className="loginBoxREG" onSubmit={handleSubmit}>
      <div className="loginHeadingREG">REGISTER</div>
      <div className="loginMidBoxREG">
        <div className="inputGroup1REG">
          <div className="inputHeadingREG">USERNAME</div>
          <input 
          className="inputFieldREG" 
          type="text" 
          id='username' 
          name='username'
          onChange={handleUsernameChange}/>
          {errors.user && <p className="errorREG" id='usererror'>{errors.user}</p>}
          {errors.taken && <p className="errorREG" id='usererror'>{errors.taken}</p>}
        </div>
        <div className="inputGroup2REG">
          <div className="inputHeadingREG">PASSWORD</div>
          <input 
          className="inputFieldREG" 
          type="password" 
          id='password' 
          name='password'
          onChange={handlePasswordChange}/>
          {errors.pass && <p className="error" id='passerror'>{errors.pass}</p>}
        </div>
        <div className="inputGroup2REG">
          <div className="inputHeadingREG">REPEAT PASSWORD</div>
          <input 
          className="inputFieldREG" 
          type="password" 
          id='confirmpass' 
          name='confirmpass'
          onChange={handleConfirmChange}/>
          {errors.confirm && <p className="error" id='confirmerror'>{errors.confirm}</p>}
        </div>
      </div>
      <div className="loginButtonBoxREG">
      {errors.match && <p className="error" id='matcherror'>{errors.match}</p>}
        <button className="submitButtonREG" type='submit'>REGISTER</button>
        
        <div className="registerCallREG">
          <a href={`/`}>ALREADY HAVE AN ACCOUNT?</a>
        </div>
      </div>
    </form>
        </>
    );
    
}


export default Register;