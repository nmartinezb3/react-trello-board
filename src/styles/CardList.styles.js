import styled from 'styled-components';

export const CardListContainer = styled.div`
  background: ${props => (props.isDraggingOver ? props.theme.draggingOverGray : props.theme.mediumGray)};
  padding: 8px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-bottom: 1px;
`;

export const CardListHeader = styled.div`
  position: relative;
  background: ${props => (props.isDraggingOver ? props.theme.draggingOverGray : props.theme.mediumGray)};
  padding: 9px 11px 1px 9px;
  color: ${props => props.theme.primaryFont};
  font-weight: 600;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
export const CardListWrapper = styled.div`
  min-width: 170px;
  height: 88vh;
  /* overflow: auto; */
`;
