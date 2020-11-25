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

const EditProductModal = (props) => {
  return (
    <ModalContent>
      <ModalHeader>Update {props.item.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            ref={props.initialRef}
            placeholder="New name"
            onChange={(e) => props.setNewName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Price</FormLabel>
          <Input
            placeholder="New price"
            onChange={(e) => props.setNewPrice(e.target.value)}
          />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={props.updateProductHandler}>
          Save
        </Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  );
};

export default EditProductModal;
