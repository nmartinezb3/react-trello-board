import styled from 'styled-components';
export const Input = styled.input`
  background-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  color: ${props => props.theme.primaryFont};
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
  &:focus {
    background-color: white;
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
