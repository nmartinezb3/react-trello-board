import { combineReducers } from 'redux';
import board from './boardReducer';
import search from './searchReducer';
import stateHistoryEnhancer from './stateHistoryEnhancer';

const rootReducer = combineReducers({
  board: stateHistoryEnhancer(board),
  search
});

export default rootReducer;
