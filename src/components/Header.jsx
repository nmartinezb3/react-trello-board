import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderInputWrapper
} from '../styles/Header.styles';
import logo from '../assets/trello-logo.png';
import SearchInput from './SearchInput';

import { setSearch } from '../actions/boardActions';

const Header = props => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderInputWrapper>
          <SearchInput
            placeholder="Search cards..."
            value={props.search}
            onChange={e => props.setSearch(e.target.value)}
          />
        </HeaderInputWrapper>
        <Link to="/board">
          <HeaderLogo src={logo} />
        </Link>
        <div />
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
const mapStateToProps = state => ({
  search: state.board.search
});

const mapDispatchToProps = dispatch => ({
  setSearch: bindActionCreators(setSearch, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
