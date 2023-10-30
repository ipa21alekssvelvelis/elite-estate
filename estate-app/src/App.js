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
<<<<<<< HEAD
        <Router>
=======
        {/* <Router>
>>>>>>> c43a6358cfebca7f9e88794f1e9e0577808e377c
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
<<<<<<< HEAD
                    <Route index element={<Navigate to="/offerlist" />} /> 
=======
                    <Route index element={<Navigate to="/offerlist" />} />
>>>>>>> c43a6358cfebca7f9e88794f1e9e0577808e377c
                  </>
                ) : (
                  <>
                    <Route path="/offerList" element={<IndexList />} />
                    <Route path="/houseview" element={<HouseView />} />
                    <Route path="/houseedit" element={<HouseEdit />} />
                    <Route path="/createProfile" element={<CreateProfile />} />
<<<<<<< HEAD
                    <Route index element={<Navigate to="/createProfile" />} /> 
=======
                    <Route index element={<Navigate to="/createProfile" />} />
>>>>>>> c43a6358cfebca7f9e88794f1e9e0577808e377c
                  </>
                )}
              </>
            ) : (
<<<<<<< HEAD
              <Route index element={<Navigate to="/login" />} /> 
            )}
          </Routes>
        </Router>
       
=======
              <Route index element={<Navigate to="/login" />} />
            )}
          </Routes> */}
        {/* </Router> */}
        <HouseEdit/>
>>>>>>> c43a6358cfebca7f9e88794f1e9e0577808e377c
      </div>
    </UserProvider>
  );
}

export default App;