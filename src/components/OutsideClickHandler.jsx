import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { randomId } from '../helpers/utils';

export default class OustideClickHandler extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.object]),
    onClickInside: PropTypes.func,
    onClickOutside: PropTypes.func,
    shouldListenClick: PropTypes.bool
  };

  static defaultProps = {
    shouldListenClick: true
  };

  id = randomId();

  componentDidMount() {
    window.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = e => {
    if (!this.props.shouldListenClick) {
      return;
    }
    if (document.getElementById(this.id).contains(e.target)) {
      if (this.props.onClickInside) {
        this.props.onClickInside(e);
      }
    } else if (this.props.onClickOutside) {
      this.props.onClickOutside(e);
    }
  };

  render() {
    return <div id={this.id}>{this.props.children}</div>;
  }
}
