import React from 'react';
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderInputWrapper
} from '../styles/Header.styles';
import logo from '../assets/trello-logo.png';
import { Link } from 'react-router-dom';
import Input from './Input';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderInputWrapper>
          <Input></Input>
        </HeaderInputWrapper>
        <Link to="/">
          <HeaderLogo src={logo}></HeaderLogo>
        </Link>
        <div></div>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

export default Header;
