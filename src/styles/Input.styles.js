import styled from 'styled-components';

export const Input = styled.input`
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  color: white;
  float: left;
  font-size: 13px;
  height: 32px;
  line-height: 19px;
  margin: 0;
  outline: none;
  padding-left: 8px;
  padding-right: 30px;
  transition: width 0.15s;
  width: 100%;
  cursor: pointer;
  &:focus {
    cursor: unset;
    background-color: white;
    color: ${props => props.theme.primaryFont};
    ::-webkit-input-placeholder { 
      color: ${props => props.theme.lightFont};;
    }

    :-ms-input-placeholder {
      color: ${props => props.theme.lightFont};;
    }

    ::placeholder {
      color: ${props => props.theme.lightFont};;
    }
  }
  
  ::-webkit-input-placeholder { 
    color: white;
  }

  :-ms-input-placeholder {
    color: white;
  }

  ::placeholder {
    color: white;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  width: ${props => props.width || '80%'};
`;

export const IconWrapper = styled.span`
  position: absolute;
  right: 7px;
  top: 7px;
`;
