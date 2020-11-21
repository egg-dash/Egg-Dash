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
    cart: [],
    address_number: '',
    address_street: '',
    address_zip: '',
    total: 0
  };

  const [state, setState] = useState(defaultState);

  const [map, setMap] = useState({
    toggled: false,
  });

  function removeCartItem(productName) {
    let newTotal = state.total;
    let newCart = [];
    //loop through all items in array
    //if its not the product, we push into our new array
    //else
      //if the amount is 0, we simply don't add it to the new array
      //if its not 0 then we decrement the amount and then add it
      console.log('removeCartItem invoked')
    let removedOne = false;
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i][1] !== productName) {
        newCart.push(state.cart[i]);
      } else {
        if (removedOne) {
          newCart.push(state.cart[i]);
        } else {
          console.log('newTotal', newTotal);
          console.log('state.cart[i][2]',state.cart[i][2]);
          newTotal -= state.cart[i][2];
          console.log('should be 0', newTotal);
          if (newTotal < .01) newTotal = 0;
          if (state.cart[i][0] !== 1) {
            let currentQuant = state.cart[i][0];
            currentQuant -= 1;
            state.cart[i][0] = currentQuant;
            newCart.push(state.cart[i]);
          }
          removedOne = true;
        }
      }
    }
    console.log(JSON.stringify(newCart));
    console.log(state.total);
    setState({
      ...state,
      cart: newCart,
      total: newTotal
    })
  }

  function emptyCart() {
    setState({
      ...state,
      cart: [],
      total: 0
    })
    // const request = {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: username, password: password }),
    // };
    // const response = await fetch("/cust/login", request);
    // const data = await response.json();
  }

  function logOut() {
    //this is what cart looks like: cart = [[4, 'Tacos']]
        // const request = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ cart }),
    // };
    // const response = await fetch("/cart/addCart", request);
    // const data = await response.json();

    //send the user back to the main page
  }

  function toggled() {
    let checker = !map.toggled;
    setMap({ toggled: checker });
  }

  function addToCart(quantity, product, price, description) {
    let current = state.cart;
    current.push([quantity, product, price, description]);
    let newTotal = 0;

    for (let i = 0; i < current.length; i++) {
      newTotal += current[i][0] * current[i][2];
      console.log('quant:', current[i][0]);
      console.log('price:', current[i][2]);
    }
    setState({
      ...state,
      cart: current,
      total: newTotal
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
    username,
    password
  ) {
    name = String(name);
    lastName = String(lastName);
    addNum= Number(addNum);
    addSt = String(addSt);
    addZip = Number(addZip);
    username = String(username);
    password = String(password);

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: name,
        last_name: lastName,
        email: username,
        password: password,
        address_number: addNum,
        address_street: addSt,
        address_zip: addZip
      }),
    };
    const response = await fetch('/cust/signup', request);
    const data = await response.json();
    console.log("this is data:", data);
    setState({
      ...state,
      verified: true,
      address_number: addNum,
      address_street: addSt,
      address_zip: addZip,
    });
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
                      <NavbarL toggled={toggled} cart={state.cart} total={state.total} emptyCart={emptyCart} removeCartItem={removeCartItem}/>
                      <Markets version={true} addToCart={addToCart}/>
                    </div>
                  ) : (
                    <div>
                      <NavbarL toggled={toggled} cart={state.cart} total={state.total} emptyCart={emptyCart} removeCartItem={removeCartItem}/>
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
