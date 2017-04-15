import Vue from 'vue'
import store from './store'
import actions from './actions'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      count: this.$select('counter as count')
    }
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
