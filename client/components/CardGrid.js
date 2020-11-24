import React from 'react';
import { Grid } from '@chakra-ui/react';

import FarmCard from './FarmCard';

const CardGrid = (props) => {
  console.log('CardGrid: ', props);
  return (
    <div className="cardGrid">
      <Grid templateColumns="repeat(5, 1fr)">
        {props.data.map((element) => {
          return <FarmCard data={element} key={element.name} />;
        })}
      </Grid>
    </div>
  );
};

export default CardGrid;
