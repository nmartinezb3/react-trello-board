import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';

export default styled(ContentEditable)`
  border: none;
  outline: none;
  overflow: hidden;
  padding: 6px;
  &:focus {
    background-color: ${props => props.theme.focusGray};
  }
`;
