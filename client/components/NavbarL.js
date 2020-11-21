import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Heading,
  Flex,
  Input,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function NavbarL(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { toggled, cart } = props;
  const cartArray = [];
  for (let i = 0; i < cart.length; i++) {
    cartArray.push(<CartItem
      key={i}
      quantity={cart[i][0]}
      product={cart[i][1]}
      price={cart[i][2]}
      description={cart[i][3]}
    />)
  }

  //quantity, product, price, description

  return (
    <div className="navbarL">
      <>
        <Button margin="15px" ref={btnRef} colorScheme="green" onClick={onOpen}>
          Cart
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Cart</DrawerHeader>
              <DrawerBody>
                {cartArray}
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Link to={"/checkout"}>
                  <Button color="blue">Checkout</Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>

      {/*********************************************************************/}
      <Button onClick={() => toggled()} margin="15px" bg="#bedbbb">
        Map
      </Button>
      <Menu>
        <MenuButton as={Button} bg="#bedbbb" margin="15px">
          Users
        </MenuButton>
        <MenuList>
          <MenuItem>Log Out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
