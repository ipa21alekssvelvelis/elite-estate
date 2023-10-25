import React from 'react';
import '../styles/App.css';
import { useUser } from './UserContext';

function Logout() {
  const { Logout } = useUser();

  const handleLogout = () => {
    Logout();
    window.location.href = 'http://localhost:3000';
  };

  return (
    <a onClick={handleLogout}>Logout</a>
  );
}

export default Logout;