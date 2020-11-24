import React from 'react';

import { Heading } from '@chakra-ui/react';
import ProductTable from './ProductTable';
import ProductAnalytics from './ProductAnalytics';

const Products = (props) => {
  return (
    <div className="productStats">
      <Heading as="h1">Products</Heading>
      <ProductTable />
      <ProductAnalytics />
    </div>
  );
};

export default Products;
