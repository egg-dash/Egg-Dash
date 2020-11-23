import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Heading,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NavbarC(props) {
  return (
    <div className="navbarC">
      <Menu>
        <MenuButton as={Button} bg="##ce7883" margin="15px">
          Users
        </MenuButton>
        <MenuList>
          <Link to="/">
            <MenuItem>Log Out</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
}
