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

const FarmerForm = () => {
  const [farmName, setFarmName] = useState('');
  const [farmStreet, setFarmStreet] = useState('');
  const [farmZipcode, setFarmZipcode] = useState('');
  const [farmEmail, setFarmEmail] = useState('');
  const [farmDescription, setFarmDescription] = useState('');
  const [farmImage, setFarmImage] = useState('');

  return (
    <Flex
      direction="column"
      align="center"
      bg="#e8e8e8"
      color="black"
      width="450px"
      borderRadius="8px"
    >
      <InputGroup mt="10px" width="sm">
        <InputLeftAddon children="Farm Name:" />
        <Input variant="filled" onChange={(e) => setFarmName(e.target.value)} />
      </InputGroup>
      <InputGroup mt="10px" width="sm">
        <InputLeftAddon children="Farm Street Address:" />
        <Input
          variant="filled"
          onChange={(e) => setFarmStreet(e.target.value)}
        />
      </InputGroup>
      <InputGroup mt="10px" width="sm">
        <InputLeftAddon children="Farm Zipcode:" />
        <Input
          variant="filled"
          onChange={(e) => setFarmZipcode(e.target.value)}
        />
      </InputGroup>
      <InputGroup mt="10px" width="sm">
        <InputLeftAddon children="Farm Email:" />
        <Input
          variant="filled"
          onChange={(e) => setFarmEmail(e.target.value)}
        />
      </InputGroup>
      <InputGroup mt="10px" width="sm">
        <InputLeftAddon children="Farm Description:" />
        <Input
          variant="filled"
          onChange={(e) => setFarmDescription(e.target.value)}
        />
      </InputGroup>
      <InputGroup mt="10px" width="sm">
        <InputLeftAddon children="Farm Image:" />
        <Input
          variant="filled"
          onChange={(e) => setFarmImage(e.target.value)}
        />
      </InputGroup>
    </Flex>
  );
};

export default FarmerForm;
