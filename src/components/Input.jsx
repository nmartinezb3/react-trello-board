import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input as StyledInput, InputContainer, IconWrapper } from '../styles/Input.styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Input = props => (
  <InputContainer>
    <StyledInput {...props}></StyledInput>
    <IconWrapper>
      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
    </IconWrapper>
  </InputContainer>
);

export default Input;
