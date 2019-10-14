import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${props => props.theme.primary};
  height: 40px;
  width: 100%;
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
export const HeaderIconsContainer = styled.div`
  justify-self: flex-end;
  margin-right: 4px;
`;
