import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../styles/Input.styles';
import IconButton from './IconButton';

export const AddButtonForm = styled.form`
    font-size: 14px;
    height: 41px;
    display: flex;
    position: relative;
`;

const AddForm = props => {
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    if (value) {
      props.onConfirm(value);
    }
    setValue('');
    setFocus(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit(e);
      setValue('');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <AddButtonForm
        onSubmit={onSubmit}
        width={props.width}
      >
        <Input
          ref={ref}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={focus || value ? props.focusPlaceholder : props.placeholder}
          darkFont={props.darkFont}
          gray={props.gray}
        />
      </AddButtonForm>
      {value && (
      <IconButton.ButtonContainer
        top="4px"
      >
        <IconButton
          onClick={onSubmit}
          iconType="confirm"
          disabled={!value}
        />
      </IconButton.ButtonContainer>
      )}
    </div>
  );
};

AddForm.propTypes = {
  onConfirm: PropTypes.func,
  placeholder: PropTypes.string,
  focusPlaceholder: PropTypes.string,
  darkFont: PropTypes.bool,
  gray: PropTypes.bool,
  width: PropTypes.string,
};
export default AddForm;
