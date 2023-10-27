
import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userInfo, setUserInfo] = useState(() => {
    const cookieUserID = Cookies.get('userID');
    const cookieSellerID = Cookies.get('sellerID');
  
    if (cookieUserID) {
      return { userID: parseInt(cookieUserID), sellerID: cookieSellerID };
    } else {
      return { userID: null, sellerID: null };
    }
  });
  
  const Login = (userID, sellerID) => {
    Cookies.set('userID', userID.toString());
    Cookies.set('sellerID', sellerID.toString());
    setUserInfo({ userID, sellerID });
  };
  
  const Logout = () => {
    setUserInfo({ userID: null, sellerID: null });
    Cookies.remove('userID');
    Cookies.remove('sellerID');
  };
  
  return (
    <UserContext.Provider value={{ userInfo, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
