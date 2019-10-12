import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../styles/Input.styles';
import IconButton from './IconButton';

export const AddButtonForm = styled.form`
    width: 160px;
    font-size: 14px;
    height: 41px;
    display: flex;
    position: relative;
`;

const AddForm = props => {
  const [listName, setListName] = useState('');
  const [focus, setFocus] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (listName) {
      props.onConfirm(listName);
    }
    setListName('');
  };
  return (
    <AddButtonForm onSubmit={onSubmit}>
      <Input
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          setListName('');
        }}
        value={listName}
        onChange={e => setListName(e.target.value)}
        placeholder={focus ? props.focusPlaceholder : props.placeholder}
      />
      {focus && (
      <IconButton.ButtonContainer top="4px">
        <IconButton
          type="submit"
          iconType="confirm"
        />
      </IconButton.ButtonContainer>
      )}
    </AddButtonForm>
  );
};

AddForm.propTypes = {
  onConfirm: PropTypes.func,
  placeholder: PropTypes.string,
  focusPlaceholder: PropTypes.string,
};
export default AddForm;
