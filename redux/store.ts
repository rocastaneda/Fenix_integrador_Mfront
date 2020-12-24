import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from './middlewares/routing';
import { nextReducer } from './reducers/nextReducer';

const localReducers = {
  nextHost: nextReducer,
};

const MiddleWares = [routerMiddleware, thunk];

const reducers = combineReducers({
  ...localReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...MiddleWares))
);

export { store };
