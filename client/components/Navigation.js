import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="" />
        <h3>Logo</h3>
      </div>
      <Menu>
        <MenuButton as={Button} bg="#bedbbb" margin="15px">
          Profile
        </MenuButton>
        <MenuList>
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/signup">
            <MenuItem>Sign Up</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
}
