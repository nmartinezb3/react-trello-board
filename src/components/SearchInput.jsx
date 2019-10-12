import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Input, InputContainer, IconWrapper } from '../styles/Input.styles';

const SearchInput = props => (
  <InputContainer>
    <Input {...props} />
    <IconWrapper>
      <FontAwesomeIcon icon={faSearch} />
    </IconWrapper>
  </InputContainer>
);

export default SearchInput;
