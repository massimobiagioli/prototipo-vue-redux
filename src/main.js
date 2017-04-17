import Vue from 'vue'
import {Counter, Machine} from './components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    Counter,
    Machine
  }
})
