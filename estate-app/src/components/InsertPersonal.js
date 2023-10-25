import '../styles/App.css';
import React, { useState } from 'react';

function InsertPersonal(){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [PersonasKods, setPersonasKods] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

}

export default InsertPersonal;