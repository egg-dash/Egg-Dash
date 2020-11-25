import React, { useState, useEffect } from 'react';

import { loadFarmData } from '../utils/helpers.js';
import { Container } from '@chakra-ui/react';

import FarmsHero from './FarmsHero';
import CardGrid from './CardGrid';

const Farms = (props) => {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    setFarms(loadFarmData());
  }, []);

  return (
    <div className="farmsContainer">
      <FarmsHero />
      <Container maxWidth="95%">
        <CardGrid data={farms} linkTo="/farm" />
      </Container>
    </div>
  );
};

export default Farms;
