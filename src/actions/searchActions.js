import * as types from '../constants/ActionTypes';

export const setSearch = searchText => ({
  type: types.SET_SEARCH,
  data: searchText
});
