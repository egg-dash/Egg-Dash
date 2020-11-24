import React from 'react';
import { Grid } from '@chakra-ui/react';

import FarmCard from './FarmCard';

const CardGrid = (props) => {
  console.log('CardGrid: ', props);
  return (
    <div className="cardGrid">
      <Grid templateColumns="repeat(5, 1fr)" gap={10}>
        {props.data.map((element) => {
          return (
            <FarmCard data={element} key={element.name} linkTo={props.linkTo} />
          );
        })}
      </Grid>
    </div>
  );
};

export default CardGrid;
