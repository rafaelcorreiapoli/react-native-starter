import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
  )
)

export default function configureStore(initialState): Store {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )
  return store
}
