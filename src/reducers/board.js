import * as types from '../constants/ActionTypes';
import * as BoardHelper from '../helpers/boardHelper';
import { randomId } from '../helpers/utils';

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

const initialState = {
  lists: [
    { id: 'lista1', name: 'Lista 1', cards: getItems(10) },
    { id: 'lista2', name: 'Lista 2', cards: getItems(5, 10) }
  ],
  offset: 2
};

const board = (state = initialState, action) => {
  let newState;
  let newList;
  switch (action.type) {
    case types.ADD_LIST:
      newState = [
        ...state.lists,
        {
          id: randomId(),
          name: action.data,
          cards: getItems(10, 10 * state.offset)
        }
      ];
      return {
        ...state,
        lists: newState,
        offset: state.offset + 1
      };
      
    case types.REMOVE_LIST:
      newList = [...state.lists];
      newList.splice(action.listIndex, 1);
      return {
        ...state,
        lists: newList
      };

    case types.ADD_CARD:
      return {
        ...state
      };

    case types.REMOVE_CARD:
      return {
        ...state
      };

    case types.SET_CARD_CONTENT:
      return {
        ...state,
        lists: state.lists.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          return {
            ...list,
            cards: list.cards.map((card, cardIndex) => {
              if (cardIndex !== action.data.cardIndex) {
                return card;
              }
              return {
                ...card,
                content: action.data.content
              };
            })
          };
        })
      };

    case types.SET_LIST_NAME:
      return {
        ...state,
        lists: state.lists.map((list, listIndex) => {
          if (listIndex !== action.data.listIndex) {
            return list;
          }
          return {
            ...list,
            name: action.data.listName
          };
        })
      };

    case types.RE_ORDER_LIST:
      const listIndex = state.lists.findIndex(list => list.id === action.data.listId);
      const list = state.lists[listIndex];
      const orderedListCards = BoardHelper.reOrderList(
        list.cards,
        action.data.cardSourceIndex,
        action.data.cardDestinationIndex
      );
      newState = [...state.lists];
      newState[listIndex] = {
        ...newState[listIndex],
        cards: orderedListCards
      };
      return {
        ...state,
        lists: newState
      };

    case types.MOVE_CARD_TO_LIST:
      const sourceListIndex = state.lists.findIndex(list => list.id === action.data.sourceListId);
      const sourceList = state.lists[sourceListIndex];
      const destinationListIndex = state.lists.findIndex(
        list => list.id === action.data.destinationListId
      );
      const destinationList = state.lists[destinationListIndex];

      const { newSourceList, newDestinationList } = BoardHelper.moveCardToList(
        sourceList.cards,
        destinationList.cards,
        action.data.cardSourceIndex,
        action.data.cardDestinationIndex
      );

      newState = [...state.lists];
      newState[sourceListIndex] = {
        ...newState[sourceListIndex],
        cards: newSourceList
      };
      newState[destinationListIndex] = {
        ...newState[destinationListIndex],
        cards: newDestinationList
      };
      return {
        ...state,
        lists: newState
      };
    default:
      return state;
  }
};

export default board;
