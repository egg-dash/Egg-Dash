import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Center,
  Heading
} from "@chakra-ui/react";
import Navbar from './Navbar'
import NavbarL from './NavbarL'
import NavbarC from './NavbarC'
import SignUp from './SignUp'
import Login from './Login'
import Markets from './Markets'


function App() {

  const defaultState = {
    verified: false,
  }

  const [state, setState] = useState(defaultState);

  const [map, setMap] = useState({
    toggled: false,
  });

  function toggled() {
    let checker = !(map.toggled);
    setMap({toggled: checker});
  }

  // This will be async.
  function signedUp(name, username, password) {

    // const request = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ pfp: profile, username: usernameval, password: passwordval })
    // }

    // const response = await fetch('/api/signup', request)
    // const data = await response.json();

    setState({
      ...state,
      verified: true
    })
  }

  return (
    <div>
      { state.verified ? (
      <Switch>
        <Route path='/' exact render={ () => {
          return (
            <div>
            { map.toggled ? (
              <div>
                <NavbarL toggled={toggled}/>
                <Markets version={true}/>
              </div>
            ) : (
              <div>
                <NavbarL toggled={toggled}/>
                <Markets version={false}/>
              </div>
            )}
            </div>
          )
        }} />
        <Route path='/checkout' exact render={ () => {
          return (
            <div>
              <NavbarC />
              This is where our checkout page will go.
            </div>
          )
        }} />
      </Switch>
      ) : (
      <Switch>
        <Route path='/' exact render={() => {
          return (
            <div>
              <Navbar />
              <br />

              <Center>
                <Heading>Welcome to EggDash!</Heading>
              </Center>
              <br />
              <Center>
                <Image src='https://yournews.com/wp-content/uploads/2018/10/organic-gardening-for-beginners-1-1024x682.jpg?x98855' />
              </Center>
              <br />
              <Center>
                <Text>Motherfucka' yeeah boi gon eat fresh today</Text>
              </Center>
              <br />
              <hr />
              <Center>
                <Text>This is where we put our mission statement or something idk</Text>
              </Center>
            </div>
          )
        }} />
        <Route path='/login' exact render={() => <div><Navbar /><Login signedUp={signedUp}/></div>} />
        <Route path='/signup' exact render={() => <div><Navbar /><SignUp signedUp={signedUp}/></div>}  />
      </Switch>
      )}
    </div>
  )
}

export default App;
