import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {isAuthenticated ? (
              <>
              {isFirstTime ? (
                <Switch>
                  <Route path="/offerList" component={IndexList} />
                  <Route path="/houseview" component={HouseView} />
                  <Route path="/houseedit" component={HouseEdit} />
                  <Route path="/createProfile" component={CreateProfile} />
                  <Redirect from="/" to="/offerlist" />
                </Switch>
              ) : (
                <Switch>
                  <Route path="/offerList" component={IndexList} />
                  <Route path="/houseview" component={HouseView} />
                  <Route path="/houseedit" component={HouseEdit} />
                  <Route path="/createProfile" component={CreateProfile} />
                  <Redirect from="/" to="/createProfile" />
                </Switch>
              )}
              </>
            ) : (
              <Redirect from="/" to="/login" />
            )}
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
