import * as types from '../constants/ActionTypes';

export const addList = name => ({
  type: types.ADD_LIST,
  data: name
});

export const removeList = index => ({
  type: types.REMOVE_LIST,
  data: index
});

export const addCard = (listIndex, cardIndex) => ({
  type: types.ADD_CARD,
  data: { listIndex, cardIndex }
});

export const removeCard = (listIndex, cardIndex) => ({
  type: types.REMOVE_CARD,
  data: { listIndex, cardIndex }
});
export const setCardContent = (listIndex, cardIndex, content) => ({
  type: types.SET_CARD_CONTENT,
  data: { listIndex, cardIndex, content }
});

export const reOrderList = (listId, cardSourceIndex, cardDestinationIndex) => ({
  type: types.RE_ORDER_LIST,
  data: {
    listId,
    cardSourceIndex,
    cardDestinationIndex
  }
});

export const moveCardToList = (
  sourceListId,
  cardSourceIndex,
  destinationListId,
  cardDestinationIndex
) => ({
  type: types.MOVE_CARD_TO_LIST,
  data: {
    sourceListId,
    cardSourceIndex,
    destinationListId,
    cardDestinationIndex
  }
});
