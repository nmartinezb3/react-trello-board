import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './helpers/localStorage';
import rootReducer from './reducers';

const middleware = [];

const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState || {},
  composeEnhancer(applyMiddleware(...middleware))
);

store.subscribe(() => {
  const state = { ...store.getState() };
  saveState(state);
});

export default store;
