import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const middleware = [];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);


export default store;
