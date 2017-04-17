<template>
  <div>
    <h3>Counter</h3>
    <div style="margin-left: 10px;">
      <span>{{count}}</span>
      <button @click="handleIncrement">+</button>
      <button @click="handleDecrement">-</button>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import actions from '../actions'

  export default {
    data () {
      return {
        count: this.$select('counter as count')
      }
    },
    methods: {
      handleIncrement () {
        store.dispatch(actions.counter.increment())
      },
      handleDecrement () {
        store.dispatch(actions.counter.decrement())
      }
    }
  }
</script>
