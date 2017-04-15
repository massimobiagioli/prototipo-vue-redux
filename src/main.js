import Vue from 'vue'
import Revue from 'revue'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import persistState from 'redux-localstorage'

const enhancer = compose(
  persistState()
)

// create a counter reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

// action creators
const actions = {
  increment () {
    return {type: 'increment'}
  },
  decrement () {
    return {type: 'decrement'}
  }
}

// combine reducers
// and create the redux store
const reduxStore = createStore(
  combineReducers({counter}),
  applyMiddleware(logger),
  enhancer
)

// create a revue store by binding redux store to Vue
const store = new Revue(Vue, reduxStore, actions)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {count: this.$select('counter as count')}
  },
  methods: {
    handleIncrement () {
      store.dispatch(actions.increment())
    },
    handleDecrement () {
      store.dispatch(actions.decrement())
    }
  }
})
