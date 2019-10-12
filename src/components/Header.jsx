import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderInputWrapper
} from '../styles/Header.styles';
import logo from '../assets/trello-logo.png';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderInputWrapper>
          <SearchInput
            placeholder="Search cards..."
          />
        </HeaderInputWrapper>
        <Link to="/">
          <HeaderLogo src={logo} />
        </Link>
        <div />
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

export default Header;
