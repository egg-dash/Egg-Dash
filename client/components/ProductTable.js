import React, { useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import AddStockModal from './AddStockModal';
import EditProductModal from './EditProductModal';

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

const data = [
  {
    id: '1',
    name: 'Milk',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '2',
    name: 'Sharp Cheddar',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '3',
    name: 'Eggs',
    price: '1.99',
    quantity: 123,
  },
  {
    id: '4',
    name: 'Kale',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '5',
    name: 'Strawberries',
    price: '1.99',
    quantity: 223,
  },
  {
    id: '6',
    name: 'Red Onion',
    price: '1.99',
    quantity: 233,
  },
  {
    id: '7',
    name: 'Broccoli',
    price: '1.99',
    quantity: 23,
  },
  {
    id: '8',
    name: 'White Onion',
    price: '1.99',
    quantity: 23,
  },
];

const ProductTable = () => {
  const [product, setProduct] = useState(null);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [modal, setModal] = useState(null);
  const [stock, setStock] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const headers = [
    { displayName: 'Product ID', name: 'id' },
    { displayName: 'Name', name: 'name' },
    { displayName: 'Price', name: 'price' },
    { displayName: 'Stock', name: 'stock' },
  ];

  const editProductHandler = (e, product) => {
    console.log(product);
    setModal('edit');
    setProduct(product);
    onOpen();
  };

  const addSupplyHandler = (e, product) => {
    console.log(product);
    setModal('stock');
    setProduct(product);
    onOpen();
  };

  const updateProductHandler = () => {
    console.log(product);
    console.log(newName);
    console.log(newPrice);
    onClose();
    // make a post request to update product

    // then clear newName and newPrice
  };

  const addStockHandler = () => {
    console.log(stock);
    onClose();

    // make a post request to add stock

    // then clear stock
  };

  return (
    <React.Fragment>
      <table className="productTable">
        <thead>
          <tr>
            {headers.map((header) => {
              return <th key={header.name}>{header.displayName}</th>;
            })}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.quantity}</td>
                <td>
                  <Button
                    bg="#bedbbb"
                    margin="15px"
                    onClick={(e) => editProductHandler(e, el)}
                  >
                    Edit
                  </Button>
                  <Button
                    bg="#bedbbb"
                    margin="15px"
                    onClick={(e) => addSupplyHandler(e, el)}
                  >
                    Add Stock
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        {modal === 'edit' ? (
          <EditProductModal
            onClose={onClose}
            isOpen={isOpen}
            initialRef={initialRef}
            finalFocusRef={finalRef}
            updateProductHandler={updateProductHandler}
            setNewPrice={setNewPrice}
            setNewName={setNewName}
            item={product}
          />
        ) : (
          <AddStockModal
            onClose={onClose}
            isOpen={isOpen}
            initialRef={initialRef}
            finalFocusRef={finalRef}
            addStockHandler={addStockHandler}
            setStock={setStock}
            item={product}
          />
        )}
      </Modal>
    </React.Fragment>
  );
};

export default ProductTable;
