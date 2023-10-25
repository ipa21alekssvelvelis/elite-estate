import '../styles/App.css';
import React, { useState } from 'react';

function UpdatePersonal(){

    const [editName, setNameEdit] = useState('');
    const [editSurname, setSurnameEdit] = useState('');
    const [editPersonasKods, setPersonasKodsEdit] = useState('');
    const [editPhone, setPhoneEdit] = useState('');
    const [editEmail, setEmailEdit] = useState('');

    const handleNameChangeEdit = (e) => {
        setNameEdit(e.target.value);
    }

    const handleSurnameChangeEdit= (e) => {
        setSurnameEdit(e.target.value);
    }

    const handlePersonasKodsChangeEdit = (e) => {
        setPersonasKodsEdit(e.target.value);
    }

    const handlePhoneChangeEdit = (e) => {
        setPhoneEdit(e.target.value);
    }

    const handleEmailChangeEdit = (e) => {
        setEmailEdit(e.target.value);
    }

}

export default UpdatePersonal;