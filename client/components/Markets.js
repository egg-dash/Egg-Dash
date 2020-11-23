import React, { useState, useEffect } from 'react';
import {
  Box,
  Badge,
  Heading,
  Flex,
  Image,
  Text,
  Button,
  Input,
  Center,
  InputGroup,
  InputLeftAddon,
  ButtonGroup,
  Container,
  Header,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  AspectRatio,
} from '@chakra-ui/react';
import Item from './Item';
export default function Markets(props) {
  const { version, addToCart, instantiateCart, email } = props;

  const defaultState = {
    products: [],
  };

  const [state, setState] = useState(defaultState);

  useEffect(() => {
    async function cart() {
      const request = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(`/cart/${email}`, request);
      const data = await response.json();
      console.log('this is data from cart login:', data);
      for (let i = 0; i < data.length; i++) {
        instantiateCart(data[i]);
      }
    }
    cart();

    async function me() {
      const request = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch('/products', request);
      const data = await response.json();
      let marketItems = [];
      for (let i = 0; i < data.length; i++) {
        let marketItem = [];
        marketItem.push(
          data[i].name,
          data[i].description,
          data[i].pictureurl,
          data[i].price,
          data[i].id,
          data[i].farm_id
        );
        marketItems.push(marketItem);
      }
      setState({ products: marketItems });
    }
    me();
  }, []);

  const itemArr = [];

  for (let i = 0; i < state.products.length; i++) {
    itemArr.push(
      <Item
        key={i}
        addToCart={addToCart}
        productName={state.products[i][0]}
        productDescription={state.products[i][1]}
        productPicture={state.products[i][2]}
        productPrice={state.products[i][3]}
        productId={state.products[i][4]}
        farmId={state.products[i][5]}
      />
    );
  }

  return (
    <div>
      {version === true ? (
        <Container maxW="max" maxH="max">
          <Flex wrap="nowrap">
            <SimpleGrid mr="25px" columns={3} mt="25px" spacing={10}>
              {itemArr}
            </SimpleGrid>
            <AspectRatio width="50%" ratio={4 / 3}>
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDKZcIZIpR-E3EQterjyMpqZF8dnMmp_VM&q=NY+NY"
                alt="demo"
              />
            </AspectRatio>
          </Flex>
        </Container>
      ) : (
        <Container maxW="max" maxH="max">
          <SimpleGrid columns={4} mt="25px" spacing={10}>
            {itemArr}
          </SimpleGrid>
        </Container>
      )}
    </div>
  );
}
