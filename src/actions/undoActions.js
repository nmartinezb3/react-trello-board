import * as types from '../constants/ActionTypes';

export const undoAction = () => ({
  type: types.UNDO_ACTION,
});
export const redoAction = () => ({
  type: types.REDO_ACTION,
});
