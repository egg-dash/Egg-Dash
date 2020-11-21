import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
export default function CartItem(props) {
  const { quantity, product, price, description } = props;
  return (
    <Box>
      <Flex justify="space-between">
        <Text>{quantity}x</Text>
        <Text>{product}</Text>
        <Text>${price}</Text>
      </Flex>
      <Flex justify="center">
        <Text fontSize="xs">
          {description}
        </Text>
      </Flex>
      <div className="space"></div>
      <Button colorScheme="red" size="xs">
        Remove
      </Button>
      <div className="space"></div>
      <div className="space"></div>
      <hr />
    </Box>
  );
}
