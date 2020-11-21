import React, { useState } from 'react'
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
  AspectRatio
} from "@chakra-ui/react";
import Item from './Item'
export default function Markets(props) {

  const { version } = props;

  return (
    <div>
       { version === true ? (
        <Container maxW='max' maxH='max'>
          <Flex wrap='nowrap'>
          <SimpleGrid mr='25px' columns={3} mt='25px' spacing={10}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </SimpleGrid>
          <AspectRatio width='50%' ratio={4 / 3}>
            <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDKZcIZIpR-E3EQterjyMpqZF8dnMmp_VM&q=NY+NY"
            alt="demo"
            />
          </AspectRatio>
          </Flex>
        </Container>
       ) : (
        <Container maxW='max' maxH='max' >
          <SimpleGrid  columns={4} mt='25px' spacing={10}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          </SimpleGrid>
        </Container>
       ) }
    </div>
  )
}
