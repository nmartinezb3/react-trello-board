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
