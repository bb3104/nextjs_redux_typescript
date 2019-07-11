import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import { combineReducers } from 'redux'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
