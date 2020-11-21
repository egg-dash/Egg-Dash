import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Box, Text, Image, Center, Heading, Badge } from "@chakra-ui/react";
import Navbar from "./Navbar";
import NavbarL from "./NavbarL";
import NavbarC from "./NavbarC";
import SignUp from "./SignUp";
import Login from "./Login";
import Markets from "./Markets";

function App() {
  const defaultState = {
    verified: false,
    cart: [['2x', 'Bagel', '4.20', 'I like turtles']]
  };

  const [state, setState] = useState(defaultState);

  const [map, setMap] = useState({
    toggled: false,
  });

  function toggled() {
    let checker = !map.toggled;
    setMap({ toggled: checker });
  }

  function addToCart(quantity, product, price, description) {
    let current = state.cart;
    current.push([quantity, product, price, description]);
    setState({
      ...state,
      quantity: current,
    });
  }

  // This will be async.
  async function loggedIn(username, password) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password: password }),
    };
    const response = await fetch("/cust/login", request);
    const data = await response.json();
    console.log("this is data:", data);
    let toReturn = false;
    if (data) {
      setState({
        ...state,
        verified: true,
      });
      toReturn = true;
    }
    return toReturn;
  }

  // This will be async.
  async function signedUp(
    name,
    lastName,
    addNum,
    addSt,
    addZip,
    userName,
    password
  ) {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: name,
        last_name: lastName,
        address_number: addNum,
        address_street: addSt,
        address_zip: addZip,
        email: userName,
        password: password,
      }),
    };
    const response = await fetch("/cust/signup", request);
    const data = await response.json();
    console.log("this is data:", data);
    if (data) {
      setState({
        ...state,
        verified: true,
      });
    }
  }

  return (
    <div>
      {state.verified ? (
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  {map.toggled ? (
                    <div>
                      <NavbarL toggled={toggled} cart={state.cart} />
                      <Markets version={true} addToCart={addToCart}/>
                    </div>
                  ) : (
                    <div>
                      <NavbarL toggled={toggled} cart={state.cart} />
                      <Markets version={false} addToCart={addToCart}/>
                    </div>
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/checkout"
            exact
            render={() => {
              return (
                <div>
                  <NavbarC cart={state.cart} />
                  This is where our checkout page will go.
                </div>
              );
            }}
          />
        </Switch>
      ) : (
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div>
                  <Navbar />
                  <br />

                  <Center>
                    <Heading >
                      <Badge fontSize='36px' colorScheme='purple'>
                      EggDash
                      </Badge>
                    </Heading>
                  </Center>
                  <br />
                  <Center>
                    <Image width='400px' src="https://i.pinimg.com/originals/5b/3f/02/5b3f023d9ba7cf502fdff442096ec129.png" />
                  </Center>
                  <br />
                  <Center>
                    <Text>Welcome to EggDash!</Text>
                  </Center>
                  <hr />
                  <Center>
                    <Text>
                      Delivering high quality, farmer-sourced food since 11/20/2020.
                    </Text>
                  </Center>
                </div>
              );
            }}
          />
          <Route
            path="/login"
            exact
            render={() => (
              <div>
                <Navbar />
                <Login loggedIn={loggedIn} />
              </div>
            )}
          />
          <Route
            path="/signup"
            exact
            render={() => (
              <div>
                <Navbar />
                <SignUp signedUp={signedUp} />
              </div>
            )}
          />
        </Switch>
      )}
    </div>
  );
}

export default App;
