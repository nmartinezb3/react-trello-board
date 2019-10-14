import * as types from '../constants/ActionTypes';

const stateHistoryEnhancer = reducer => {
  const initialState = {
    previousStates: [],
    currentState: reducer(undefined, {}),
    futureStates: []
  };

  return (state = initialState, action) => {
    const { previousStates, currentState, futureStates } = state;
    switch (action.type) {
      case types.UNDO_ACTION:
        const previous = previousStates[previousStates.length - 1];
        const newPreviousStates = previousStates.slice(0, previousStates.length - 1);
        return {
          previousStates: newPreviousStates,
          currentState: previous,
          futureStates: [currentState, ...futureStates]
        };
      case types.REDO_ACTION:
        const next = futureStates[0];
        const newFutureStates = futureStates.slice(1);
        return {
          previousStates: [...previousStates, currentState],
          currentState: next,
          futureStates: newFutureStates
        };
      default:
        const newCurrentState = reducer(currentState, action);
        if (currentState === newCurrentState) {
          return state;
        }
        if (currentState) {
          return {
            previousStates: [...(previousStates || []), currentState],
            currentState: newCurrentState,
            futureStates: []
          };
        }
        return {
          previousStates: [...(previousStates || [])],
          currentState: newCurrentState,
          futureStates: []
        };
    }
  };
};

export default stateHistoryEnhancer;
