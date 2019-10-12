import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 3px;
  color: #939393;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const IconButton = ({ type, ...props }) => {
  return (
    <Button {...props}>
      <FontAwesomeIcon icon={type === 'edit' ? faPen : faCheck}></FontAwesomeIcon>
    </Button>
  );
};
export default IconButton;
