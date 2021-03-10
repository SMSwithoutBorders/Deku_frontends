import React, { useState } from 'react';
import './App.scss';

import Login from './content/Login';
import DashBoard from './content/Dashboard';

const getToken = () => {
  const token = sessionStorage.getItem('c-deck-token');
  return token;
};

const App = () => {

  const token = getToken();
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  if (isLoggedIn) {
    return (<DashBoard />);
  }
  return (<Login setIsLoggedIn={setIsLoggedIn} />);
};

export default App;
