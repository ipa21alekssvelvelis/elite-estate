import React from 'react';
import { useUser } from './UserContext';

function Logout() {
  const { Logout } = useUser();

  const handleLogout = () => {
    Logout();
    window.location.href = 'http://localhost:3000';
  };

  return (
    <a className='routerButtons' onClick={handleLogout}>LOGOUT</a>
  );
}

export default Logout;