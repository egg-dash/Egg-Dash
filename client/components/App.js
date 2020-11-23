import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Box, Text, Image, Center, Heading, Badge } from '@chakra-ui/react';
import Navbar from './Navbar';
import NavbarL from './NavbarL';
import NavbarC from './NavbarC';
import SignUp from './SignUp';
import Login from './Login';
import Markets from './Markets';

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
