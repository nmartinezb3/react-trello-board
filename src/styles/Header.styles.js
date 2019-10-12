import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${props => props.theme.primary};
  height: 40px;
`;
export const HeaderLogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100%;
`;

export const HeaderLogo = styled.img`
  width: 80px;
`;

export const HeaderInputWrapper = styled.div`
  width: 100%;
  justify-self: flex-start;
  margin-left: 4px;
`;
