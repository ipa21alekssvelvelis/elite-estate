import React, { useState } from 'react';
import '../styles/StylesEditPro.css';
import image from '../assets/image-removebg-preview.png';
import image2 from '../assets/editProf.png';
import Menu from './Menu.js';
import Cookies from 'js-cookie';

function EditProfile() {

    const [editSurname, setSurnameEdit] = useState('');
    const [editPhone, setPhoneEdit] = useState('');
    const [editEmail, setEmailEdit] = useState('');

    const [errors, setErrors] = useState({});
    const isAuthenticated = Cookies.get('userID');

    const [successMessage, setSuccessMessage] = useState('');

    const handleSurnameChangeEdit= (e) => {
        setSurnameEdit(e.target.value);
    }

    const handlePhoneChangeEdit = (e) => {
        setPhoneEdit(e.target.value);
    }

    const handleEmailChangeEdit = (e) => {
        setEmailEdit(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newErrors = {};
        const trimmedSurname = editSurname.trim();
        const trimmedEmail = editEmail.trim();
        const trimmedPhone = editPhone.trim();

        if (!trimmedSurname) {
            newErrors.editSurname = 'Surname is required.';
        } else if (trimmedSurname.length > 40) {
            newErrors.editSurname = 'Surname must be 40 characters or less.';
        }

        if (!trimmedEmail) {
            newErrors.editEmail = 'Email is required.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(trimmedEmail)) {
            newErrors.editEmail = 'Wrong email format.';
        }

        if (!trimmedPhone) {
            newErrors.editPhone = 'Phone is required';
        } else if (trimmedPhone.length !== 8) {
            newErrors.editPhone = 'Phone must be 8 digits';
        } else if (isNaN(trimmedPhone)){
            newErrors.editPhone = 'Phone does not contain letters';
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:8888/datubazes/estate-main/elite-estate/utilities/updatePersonal.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({editSurname: trimmedSurname, editEmail: trimmedEmail, editPhone: trimmedPhone, isAuthenticated: isAuthenticated }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Update personal response:', data);
                    if (data.errors) {
                        if(data.errors.email){
                            newErrors.editEmail = data.errors.email;
                            setErrors(newErrors);
                        }
                        if(data.errors.phone){
                            newErrors.editPhone = data.errors.phone;
                            setErrors(newErrors);
                        }
                    } else {
                        console.log('Data submitted successfully');
                        newErrors = {};
                        setErrors(newErrors);
                        setSuccessMessage('Updated successfully');
                        // window.location.href = 'http://localhost:3000';
                    }
                } else {
                    console.error('Submission failed');
                }
            } catch (errors) {
                console.error('Error:', errors);
                
            }
        } else {
            setErrors(newErrors);
            setSuccessMessage('');
        }
    }

    return (
        <>
            <Menu />
            <div className="topHeadingEDITPRF">
                <div className="mainHeadingTextBoxEDITPRF">
                    <img className="img1EDITPRF" src={image} alt="" />
                </div>
            </div>
            <div className="midLineEDITPRF"></div>
            <div className="underMidEDITPRF">
                <div className="smallBoxEDITPRF">
                    <div className="mainHeadingTextBox2EDITPRF">
                        <img className="img2EDITPRF" src={image2} alt="" />
                    </div>
                </div>
            </div>
            <div className="midLine2EDITPRF"></div>
              <div className="midContainerEDITPRF">
                <form className="midBoxEDITPRF" onSubmit={handleSubmit}>
                    <div className="boxHeadingEDITPRF">PROFILE PERSONALIZATION</div>
                    
                    <div className="formBlockEDITPRF">
                        <div className="blockLabelEDITPRF">EMAIL</div>
                        <input
                            className="inputFieldUnderEDITPRF"
                            type="text"
                            id='email'
                            value={editEmail}
                            onChange={handleEmailChangeEdit} />
                        {errors.editEmail && <p className="error">{errors.editEmail}</p>}
                    </div>
                    <div className="formBlockEDITPRF">
                        <div className="blockLabelEDITPRF">SURNAME</div>
                        <input
                            className="inputFieldUnderEDITPRF"
                            type="text"
                            id='surname'
                            value={editSurname}
                            onChange={handleSurnameChangeEdit} />
                        {errors.editSurname && <p className="error">{errors.editSurname}</p>}
                    </div>
                    <div className="formBlockEDITPRF">
                        <div className="blockLabelEDITPRF">PHONE</div>
                        <input
                            className="inputFieldUnderEDITPRF"
                            type="text"
                            id='phone'
                            value={editPhone}
                            onChange={handlePhoneChangeEdit} />
                        {errors.editPhone && <p className="error">{errors.editPhone}</p>}
                    </div>
                    
                    <div className="buttonBoxEDITPRF">
                      <button className="saveButtonEDITPRF">UPDATE</button>
                        <div>
                            {successMessage && <p className='success'>{successMessage}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditProfile;
