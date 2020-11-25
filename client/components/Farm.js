import React, { useState, useEffect } from 'react';

import { Container } from '@chakra-ui/react';
import { loadFarmProducts } from '../utils/helpers';
import FarmsHero from './FarmsHero';
import CardGrid from './CardGrid';
import Search from './Search';

const Farm = (props) => {
  const [farm, setFarm] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const farm = loadFarmProducts();
    setFarm(farm);
    setProducts(farm.products);
    setFilteredProducts(farm.products);
  }, []);

  const searchProducts = (term) => {
    if (term === '') return setFilteredProducts(products);
    const searchableFields = ['name', 'description'];
    const filteredProducts = products.filter((product) => {
      return searchableFields
        .map((field) => {
          return product[field].includes(term);
        })
        .some((val) => val === true);
    });
    console.log(filteredProducts);
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="farmsContainer">
      <FarmsHero />
      <Container maxWidth="95%">
        <Search onChange={searchProducts} />
        <CardGrid data={filteredProducts} />
      </Container>
    </div>
  );
};

export default Farm;
