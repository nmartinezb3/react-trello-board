import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderInputWrapper,
  HeaderIconsContainer
} from '../styles/Header.styles';
import logo from '../assets/trello-logo.png';
import SearchInput from './SearchInput';
import { undoAction, redoAction } from '../actions/undoActions';
import { setSearch } from '../actions/searchActions';
import IconButton from './IconButton';

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
        <HeaderIconsContainer>
          <IconButton
            fontSize="15px"
            onClick={props.undoAction}
            disabled={!props.hasPreviousStates}
            iconType="undo"
          />
          <IconButton
            fontSize="15px"
            onClick={props.redoAction}
            disabled={!props.hasNextStates}
            iconType="redo"
          />

        </HeaderIconsContainer>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  undoAction: PropTypes.func,
  redoAction: PropTypes.func,
  hasPreviousStates: PropTypes.bool,
  hasNextStates: PropTypes.bool,
};
const mapStateToProps = state => ({
  search: state.search,
  hasNextStates: state.board.futureStates.length > 0,
  hasPreviousStates: state.board.previousStates.length > 0
});

const mapDispatchToProps = dispatch => ({
  setSearch: bindActionCreators(setSearch, dispatch),
  undoAction: bindActionCreators(undoAction, dispatch),
  redoAction: bindActionCreators(redoAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
