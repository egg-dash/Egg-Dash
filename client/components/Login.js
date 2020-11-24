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
  CloseButton,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const Login = () => {
  // useState hook
  const [newUser, setLoggedin] = useState(false);

  //

  return (
    <Container maxW="max" maxH="max">
      <Center pt="40px" pb="800px">
        <Flex
          direction="column"
          align="center"
          bg="#e8e8e8"
          color="black"
          width="450px"
          borderRadius="8px"
          padding="30px"
        >
          <Link to={'/'}>
            <CloseButton className="right" />
          </Link>
          <img
            src="https://i.pinimg.com/originals/13/96/e3/1396e3af2ef86850c7e4cf64540d54ea.png"
            width="225px"
            height="225px"
            margin="15px"
          />
          <FormControl display="flex" alignItems="left">
            <FormLabel htmlFor="signing-up" mb="0">
              New user? Sign up here!
            </FormLabel>
            <Switch id="new-user" />
          </FormControl>
          <InputGroup mt="10px" width="sm">
            <InputLeftAddon children="Username:" />
            <Input variant="filled" />
          </InputGroup>
          <InputGroup mt="10px" width="sm">
            <InputLeftAddon children="Password:" pr="20px" />
            <Input variant="filled" />
          </InputGroup>
        </Flex>
      </Center>
    </Container>
  );
};

export default Login;
