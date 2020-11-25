import React from 'react';
import { Box, Image, Badge, StarIcon } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const FarmCard = (props) => {
  const { data } = props;
  const {
    name,
    addressStreet,
    addressZip,
    description,
    image,
    features,
  } = data;
  return (
    <Link to={props.linkTo}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={image} alt="image" className="farmCardImage" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {features}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>

          <Box>
            {/* {property.formattedPrice} */}
            <Box as="span" color="gray.600" fontSize="sm">
              Denver, CO
            </Box>
          </Box>

          {/* <Box d="flex" mt="2" alignItems="center">
          { {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                // color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))} }
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            reviews
          </Box>
        </Box> */}
        </Box>
      </Box>
    </Link>
  );
};

export default FarmCard;
