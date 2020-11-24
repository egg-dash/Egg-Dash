import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import { Box, Text, Image, Center, Heading, Badge } from '@chakra-ui/react';
// import Navbar from './Navbar';
// import NavbarL from './NavbarL';
// import NavbarC from './NavbarC';
// import SignUp from './SignUp';
import Login from './Login';
// import Markets from './Markets';
import Navigation from './Navigation';
import Farm from './Farm';
import Farms from './Farms';
import FarmerDashboard from './FarmerDashboard';

const App = (props) => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/farm">
          <Farm />
        </Route>
        <Route path="/dashboard">
          <FarmerDashboard />
        </Route>
        <Route exact path="/">
          <Farms />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
