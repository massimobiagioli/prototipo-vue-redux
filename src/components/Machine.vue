<template>
  <div>
    <h3>Machine State</h3>
    <div style="margin-left: 10px;">
      <div>
        <span>IP Address: </span><span>{{machine.machineStatus.ip}}</span>
      </div>
      <button @click="scan">Scan</button>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import actions from '../actions'

  export default {
    data () {
      return {
        machine: this.$select('machine as machine')
      }
    },
    methods: {
      scan () {
        store.dispatch(actions.machine.scan())
      }
    }
  }
</script>
