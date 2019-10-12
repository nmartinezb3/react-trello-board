import styled from 'styled-components';

export const CardContainer = styled.div`
  user-select: none;
  padding: 16px;
  margin: 0 0 8px 0;

  background: ${props => (props.isDragging ? 'lightgreen' : props.theme.lightGray)};
  color: ${props => props.theme.primaryFont};
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  border-radius: 3px;
  position: relative;
  &:hover {
    cursor: drag;
  }
`;

export const CardText = styled.div`
  & > * {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    overflow: hidden;
    margin-top: 7px;
    margin-bottom: 7px;
    padding: 6px;
    margin-left: -8px;
    &:focus {
      background-color: ${props => props.theme.focusGray};
    }
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 3px;
`;
