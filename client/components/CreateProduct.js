import React, { useState } from 'react';
import {
  useDisclosure,
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
  Textarea,
  Select,
} from '@chakra-ui/react';

const CreateProduct = (props) => {
  const productTypes = [
    {
      displayName: 'Dairy',
      value: 'dairy',
    },
    {
      displayName: 'Produce',
      value: 'produce',
    },
    { displayName: 'Meat', value: 'meat' },
  ];
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [productType, setProductType] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const createNewProductHandler = (e) => {
    console.log(e);

    onClose();

    // create new product

    // clear fields

    // reload page to get new state?
  };

  const setProductTypeHandler = (type) => {
    console.log(type);
    setProductType(type);
  };

  return (
    <React.Fragment>
      <Button onClick={onOpen}>Add Product</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={props.initialRef}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ice cream?"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              {/* <Input
                placeholder="Description"
                onChange={(e) => setName(e.target.value)}
              /> */}
              <Textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="This cheese is the best."
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="4.99"
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select
                placeholder="Select a category"
                onChange={(e) => setProductTypeHandler(e.target.value)}
              >
                {productTypes.map((type) => {
                  return <option value={type.value}>{type.displayName}</option>;
                })}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={createNewProductHandler}
            >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default CreateProduct;
