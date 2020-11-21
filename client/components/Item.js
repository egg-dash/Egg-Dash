import React, { useState } from "react";
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
} from "@chakra-ui/react";

export default function Item({ addToCart }) {
  const defaultState = {
    quantity: 0,
    productName: "Corn",
    farmName: "Pepperidge Farms",
    price: "1.99",
    productImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190423-microwave-corn-140-1556657770.jpg?crop=0.534xw:0.801xh;0.245xw,0.115xh&resize=480:*',
    description: 'A delicious cereal grain, first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.',
  };

  const [state, setState] = useState(defaultState);

  function incQuant(field) {
    console.log('pressed');
    let current = state.quantity;
    current += 1;
    setState({
      ...state,
      quantity: current,
    });
    return;
  }

  function decQuant(field) {
    console.log('decreased');
    let current = state.quantity;
    current -= 1;
    setState({
      ...state,
      quantity: current,
    });
    return;
  }

  function clicked() {

    addToCart(state.quantity, state.productName, state.price, state.description);
    return;
  }

  return (
    <Box>
      <Image
        borderRadius="md"
        src= {state.productImage}
      />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="green" mt={2}>
          Organic
        </Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="green.800"
        >
          &bull; {state.productName} &bull; Non-GMO
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Location: {state.farmName}
      </Text>
      <Text>${state.price}</Text>
      <br />
      <NumberInput size="sm" min={0} defaultValue={0} onChange={incQuant}>
        <NumberInputField />
        <NumberInputStepper >
          <NumberIncrementStepper/>
          <NumberDecrementStepper/>
        </NumberInputStepper>
      </NumberInput>
      <br />
      <Center>
        <Button size="md" onClick={() => clicked()}>
          Add To Cart
        </Button>
      </Center>
    </Box>
  );
}
