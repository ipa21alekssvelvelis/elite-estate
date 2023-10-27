import React, { useState } from 'react';
import '../styles/StylesMain3.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/editaprofile.png';
import Menu from './Menu.js';
import Cookies from 'js-cookie';

function CreateProfile() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [PersonasKods, setPersonaskods] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const isAuthenticated = Cookies.get('userID');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }

    const handlePersonasKodsChange = (e) => {
        setPersonaskods(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newErrors = {};
        const trimmedName = name.trim();
        const trimmedSurname = surname.trim();
        const trimmedEmail = email.trim();
        const trimmedPersonasKods = PersonasKods.trim();
        const trimmedPhone = phone.trim();

        if (!trimmedName) {
            newErrors.name = 'Name is required.';
        } else if (trimmedName.length > 40) {
            newErrors.name = 'Name must be 40 characters or less.';
        }

        if (!trimmedSurname) {
            newErrors.surname = 'Surname is required.';
        } else if (trimmedSurname.length > 40) {
            newErrors.surname = 'Surname must be 40 characters or less.';
        }

        if (!trimmedEmail) {
            newErrors.email = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(trimmedEmail)) {
            newErrors.email = 'Wrong email format.';
        }

        if (!trimmedPhone) {
            newErrors.phone = 'Phone is required';
        } else if (trimmedPhone.length !== 8) {
            newErrors.phone = 'Phone must be 8 digits';
        }

        if (!trimmedPersonasKods){
          newErrors.PersonasKods = 'Code is required';
        } else if (trimmedPersonasKods.length !== 12){
          newErrors.PersonasKods = 'Code must be 12 digits';
        }
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:8888/datubazes/estates/utilities/insertPersonal.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: trimmedName, surname: trimmedSurname, email: trimmedEmail, phone: trimmedPhone, PersonasKods: trimmedPersonasKods, isAuthenticated: isAuthenticated }),
                });

                if (response.ok) {
                  console.log('Response:', await response.text());
                    const data = await response.json();
                    if (data.error) {
                        console.error('Error:', data.error);
                    } else {
                        console.log('Data submitted successfully');
                        console.log(data);
                        window.location.href = 'http://localhost:3000';
                    }
                } else {
                    console.error('Submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <>
            <Menu />
            <div className="topHeading">
                <div className="mainHeadingTextBox">
                    <img className="img1" src={image} alt="" />
                </div>
            </div>
            <div className="midLine"></div>
            <div className="underMid">
                <div className="smallBox">
                    <div className="mainHeadingTextBox2">
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
            <div className="midLine2"></div>
              <div className="midContainer">
                <form className="midBox" onSubmit={handleSubmit}>
                    <div className="boxHeading">PROFILE PERSONALIZATION</div>
                    <div className="formBlock">
                        <div className="blockLabel">NAME</div>
                        <input
                            className="inputFieldUnder"
                            type="text"
                            id='name'
                            value={name}
                            onChange={handleNameChange} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="formBlock">
                        <div className="blockLabel">EMAIL</div>
                        <input
                            className="inputFieldUnder"
                            type="text"
                            id='email'
                            value={email}
                            onChange={handleEmailChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="formBlock">
                        <div className="blockLabel">SURNAME</div>
                        <input
                            className="inputFieldUnder"
                            type="text"
                            id='surname'
                            value={surname}
                            onChange={handleSurnameChange} />
                        {errors.surname && <p className="error">{errors.surname}</p>}
                    </div>
                    <div className="formBlock">
                        <div className="blockLabel">PERSONAL CODE</div>
                        <input
                            className="inputFieldUnder"
                            type="text"
                            id='personas-kods'
                            value={PersonasKods}
                            onChange={handlePersonasKodsChange} />
                          {errors.PersonasKods && <p className='error'>{errors.PersonasKods}</p>}
                    </div>
                    <div className="formBlock">
                        <div className="blockLabel">PHONE</div>
                        <input
                            className="inputFieldUnder"
                            type="text"
                            id='phone'
                            value={phone}
                            onChange={handlePhoneChange} />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="buttonBox">
                      <button className="saveButton">SAVE</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateProfile;
