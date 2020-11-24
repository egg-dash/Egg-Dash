import React, { useState, useEffect } from 'react';

import { loadFarmData } from '../utils/helpers.js';

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
      <CardGrid data={farms} />
    </div>
  );
};

export default Farms;
