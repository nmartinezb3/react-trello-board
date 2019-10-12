import styled from 'styled-components';

export const CardListContainer = styled.div`
  background: ${props => (props.isDraggingOver ? '#dfe6ff' : props.theme.mediumGray)};
  padding: 8px;
  width: 250px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-bottom: 1px;
`;

export const CardListHeader = styled.div`
  background: ${props => (props.isDraggingOver ? '#dfe6ff' : props.theme.mediumGray)};
  padding: 15px 10px 8px;
  color: ${props => props.theme.primaryFont};
  font-weight: 600;
  width: 246px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
