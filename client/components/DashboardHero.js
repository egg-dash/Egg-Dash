import React from 'react';

import { Heading } from '@chakra-ui/react';

const DashboardHero = (props) => {
  return (
    <div className="dashboardHero mt">
      <Heading as="h1">Overview</Heading>
      <p>Take a look around...</p>
    </div>
  );
};

export default DashboardHero;
