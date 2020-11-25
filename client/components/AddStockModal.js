import React from 'react';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from '@chakra-ui/react';

const AddStockModal = (props) => {
  return (
    <ModalContent>
      <ModalHeader>Add stock for {props.item.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <Input
            ref={props.initialRef}
            placeholder="300"
            onChange={(e) => props.setStock(e.target.value)}
          />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="green" mr={3} onClick={props.addStockHandler}>
          Create
        </Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default AddStockModal;
