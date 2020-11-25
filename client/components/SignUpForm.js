import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Input,
  Center,
  InputGroup,
  InputLeftAddon,
  ButtonGroup,
  Container,
  Header,
  useToast,
  Select,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import FarmerForm from './FarmerForm.js';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const toast = useToast();
  return (
    <Flex
      direction="column"
      align="center"
      bg="#e8e8e8"
      color="black"
      width="450px"
      borderRadius="8px"
      padding="30px"
    >
      <InputGroup mt="10px">
        <InputLeftAddon children="First Name:" />
        <Input
          variant="filled"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputGroup>
      <InputGroup mt="10px">
        <InputLeftAddon children="Last Name:" />
        <Input variant="filled" onChange={(e) => setLastName(e.target.value)} />
      </InputGroup>
      <InputGroup mt="10px">
        <InputLeftAddon children="Street Address:" />
        <Input
          variant="filled"
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </InputGroup>
      <InputGroup mt="10px">
        <InputLeftAddon children="Zipcode:" />
        <Input variant="filled" onChange={(e) => setZipCode(e.target.value)} />
      </InputGroup>
      <InputGroup mt="10px">
        <InputLeftAddon children="Email:" />
        <Input variant="filled" onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>
      <InputGroup mt="10px">
        <InputLeftAddon children="Password:" pr="20px" />
        <Input variant="filled" onChange={(e) => setPassword(e.target.value)} />
      </InputGroup>
      <Select
        mt="10px"
        variant="filled"
        placeholder="User Type"
        onChange={(e) => setUserType(e.target.value)}
      >
        <option value="Merchant">Merchant</option>
        <option value="Customer">Customer</option>
      </Select>
      {userType === 'Merchant' ? <FarmerForm /> : null}
      <Link to={'/'}>
        <Button
          mt="30px"
          mb="30px"
          width="sm"
          onClick={() => {
            toast({
              title: 'Signed up.',
              description: "We've created a new account for you.",
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          }}
        >
          Sign Up
        </Button>
      </Link>
    </Flex>
  );
};

export default SignUp;

/*
  const defaultState = {
    firstname: '',
    lastname: '',
    streetaddress: '',
    zipcode: '',
    username: '',
    password: '',
    userType: '',
  };

  const [state, setState] = useState(defaultState);

  function firstnameChange(field) {
    setState({
      ...state,
      firstname: field.target.value,
    });
  }

  function lastnameChange(field) {
    setState({
      ...state,
      lastname: field.target.value,
    });
  }

  function streetaddressChange(field) {
    setState({
      ...state,
      streetaddress: field.target.value,
    });
  }

  function zipcodeChange(field) {
    setState({
      ...state,
      zipcode: field.target.value,
    });
  }

  function usernameChange(field) {
    setState({
      ...state,
      username: field.target.value,
    });
  }

  function passwordChange(field) {
    setState({
      ...state,
      password: field.target.value,
    });
  }

  function userTypeChange(field) {
    setState({
      ...state,
      userType: field.target.value,
    });
  }

  function clicked() {
    signedUp(
      state.firstname,
      state.lastname,
      state.streetaddress,
      state.zipcode,
      state.username,
      state.password,
      state.userType
    );
  }
  */
