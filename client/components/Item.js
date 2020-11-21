import React from 'react'
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

export default function Item() {
  return (
    <Box >
      <Image borderRadius='md' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190423-microwave-corn-140-1556657770.jpg?crop=0.534xw:0.801xh;0.245xw,0.115xh&resize=480:*' />
      <Flex align='baseline' mt={2}>
        <Badge colorScheme="green" mt={2}>Organic</Badge>
        <Text
          ml={2}
          textTransform='uppercase'
          fontSize='sm'
          fontWeight='bold'
          color='green.800'
          >
            &bull; Verified &bull; Non-GMO
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        Pepperidge Farms, St. Louis
      </Text>
      <Text>$1.99/dozen</Text>
      <br />
      <NumberInput size='sm' min={0} defaultValue={0}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br />
      <Center>
        <Button size='md'>Add To Cart</Button>
      </Center>
    </Box>
  )
}
