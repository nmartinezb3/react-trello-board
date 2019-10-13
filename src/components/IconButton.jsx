import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 25px;
  height: 25px;
  padding: 0;
  border-radius: 3px;
  color: #939393;
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: ${props => props.top || '2px'};
  right: ${props => props.right || '3px'};
`;

const getIconForType = type => {
  switch (type) {
    case 'edit':
      return faPen;
    case 'confirm':
      return faCheck;
    case 'delete':
      return faTrashAlt;
    default:
      break;
  }
};

const IconButton = ({ iconType, ...props }) => {
  return (
    <Button {...props}>
      <FontAwesomeIcon icon={getIconForType(iconType)} />
    </Button>
  );
};
IconButton.propTypes = {
  iconType: PropTypes.oneOf(['edit', 'confirm', 'delete']),
};
IconButton.ButtonContainer = ButtonContainer;

export default IconButton;
