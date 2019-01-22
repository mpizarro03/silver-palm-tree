import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root-reducer'

import getVideoMiddleware from './middlewares/get-video-middleware'

const middlewares = [getVideoMiddleware]

export default function configureStore() {
 return createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
 );
}