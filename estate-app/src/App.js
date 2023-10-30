import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated import
import CreateProfile from './components/CreateProfile';
import Login from './components/Login';
import Register from './components/Register';
import IndexList from './components/IndexList';
import HouseView from './components/HouseView.js';
import HouseEdit from './components/HouseEdit.js';
import Cookies from 'js-cookie';
import { UserProvider } from './components/UserContext';

function App() {
  const isAuthenticated = !!Cookies.get('userID');
  const isFirstTime = !!Cookies.get('sellerID');

  return (
    <UserProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {isAuthenticated ? (
              <>
                {isFirstTime ? (
                  <>
                    <Route path="/offerList" element={<IndexList />} />
                    <Route path="/houseview" element={<HouseView />} />
                    <Route path="/houseedit" element={<HouseEdit />} />
                    <Route path="/createProfile" element={<CreateProfile />} />
                    <Route index element={<Navigate to="/offerlist" />} /> 
                  </>
                ) : (
                  <>
                    <Route path="/offerList" element={<IndexList />} />
                    <Route path="/houseview" element={<HouseView />} />
                    <Route path="/houseedit" element={<HouseEdit />} />
                    <Route path="/createProfile" element={<CreateProfile />} />
                    <Route index element={<Navigate to="/createProfile" />} /> 
                  </>
                )}
              </>
            ) : (
              <Route index element={<Navigate to="/login" />} /> 
            )}
          </Routes>
        </Router>
    
      </div>
    </UserProvider>
  );
}

export default App;
