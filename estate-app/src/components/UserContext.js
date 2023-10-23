
import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userInfo, setUserInfo] = useState(() => {
    const cookieUserID = Cookies.get('roleID');

    if (cookieUserID) {
      return { roleID: parseInt(cookieUserID) };
    } else {
      return { roleID: null };
    }
  });

  const Login = (roleID) => {
    // console.log("Setting roleID and cookie:", userID);
    Cookies.set('roleID', roleID.toString());
    setUserInfo({ roleID });
    // console.log("Local storage and cookie operation successful:", userID);
  };

  const Logout = () => {
    setUserInfo(null);
    Cookies.remove('roleID');
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
