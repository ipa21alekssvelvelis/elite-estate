import React, { useState } from 'react';
import '../styles/App.css';

function Register(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState({});

    handleUsernameChange = (e) => {
        setUser(e.target.value);
    }

    handlePasswordcHANGE = (e) => {
        setPass(e.target.value);
    }

    handleConfirmChange = (e) => {
        setConfirm(e.target.value);
    }
}

export default Register;