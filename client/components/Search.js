import React from 'react';

import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

const Search = (props) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="search"
        placeholder="Ice creammmmmmmm"
        onChange={(e) => props.onChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default Search;
