import styled from 'styled-components';
import { device } from './devices';

export const BoardContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.countColumns}, 1fr);
  grid-gap: 13px;
  margin: 10px;
  margin-top: 45px;
  @media device and ${device.tabletLandscape} {
    overflow-x: auto;
  }
  
`;
