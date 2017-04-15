import Vue from 'vue'
import store from './store'
import actions from './actions'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      count: this.$select('counter as count'),
      machine: this.$select('machine as machine')
    }
  },
  methods: {
    handleIncrement () {
      store.dispatch(actions.counter.increment())
    },
    handleDecrement () {
      store.dispatch(actions.counter.decrement())
    },
    scan () {
      store.dispatch(actions.machine.scan())
    }
  }
})
