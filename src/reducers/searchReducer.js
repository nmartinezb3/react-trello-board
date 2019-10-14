import * as types from '../constants/ActionTypes';

const initialState = '';

const board = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return action.data;
    default:
      return state;
  }
};

export default board;
