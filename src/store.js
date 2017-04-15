import Vue from 'vue'
import Revue from 'revue'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import persistState from 'redux-localstorage'
import {apiMiddleware} from 'redux-api-middleware'
import actions from './actions'

const enhancer = compose(
  persistState('machine', {key: 'prototipo-vue-redux'})
)

// create a counter reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// create a machine reducer
const MACHINE_INITIAL_STATE = {
  machineStatus: {
    ip: null,
    error: null,
    loading: false
  }
}

const machine = (state = MACHINE_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RETRIEVE_IP':
      return {...state, machineStatus: {ip: null, error: null, loading: true}}
    case 'RETRIEVE_IP_SUCCESS':
      return {...state, machineStatus: {ip: action.payload.ip, error: null, loading: true}}
    case 'RETRIEVE_IP_FAILURE':
      const error = action.payload.data || {message: action.payload.message}
      return {...state, machineStatus: {ip: null, error, loading: true}}
    default:
      return state
  }
}

// combine reducers
// and create the redux store
const reduxStore = createStore(
  combineReducers({counter, machine}),
  applyMiddleware(logger, apiMiddleware),
  enhancer
)

// create a revue store by binding redux store to Vue
const store = new Revue(Vue, reduxStore, actions)

export default store
