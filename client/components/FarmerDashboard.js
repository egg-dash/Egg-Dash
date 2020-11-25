import React from 'react';

import { Container } from '@chakra-ui/react';
import DashboardHero from './DashboardHero';
import Products from './Products';
import CreateProduct from './CreateProduct';

const FarmerDashboard = (props) => {
  return (
    <div className="farmerDashboardContainer">
      <Container maxWidth="95%">
        <DashboardHero />
        <CreateProduct />
        <Products />
      </Container>
    </div>
  );
};

export default FarmerDashboard;
