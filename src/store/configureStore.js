import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const developmentOnlyMiddleWare = [
  createLogger({ collapsed: true }),
] 

const middleware = [
  thunk,
  ...process.env.NODE_ENV === 'development' ? developmentOnlyMiddleWare : [],
]

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
  );
}