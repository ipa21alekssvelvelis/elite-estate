import React from 'react';
import '../App.css';
import Logout from './Logout.js';
import Cookies from 'js-cookie';

function Menu() {
  const isAuthenticated = Cookies.get('roleID');
  const currentPath = window.location.pathname;

  return (
    <div className='header'>
      <Logout />
      {isAuthenticated && (
        <>
          {currentPath === '/' && (
            <>
              <a href={`/create`}>Create</a>
              <a href={`/find`}>Find</a>
            </>
          )}
          {currentPath === '/find' && (
            <>
              <a href={`/create`}>Create</a>
              <a href={`/`}>List</a>
            </>
          )}
          {currentPath === '/create' && (
            <>
              <a href={`/find`}>Find</a>
              <a href={`/`}>List</a>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Menu;
