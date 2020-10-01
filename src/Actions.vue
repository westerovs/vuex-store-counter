<template>
    <div>
      <button @click="updateCounter(+1)" class="btn btn-success">Add</button>
      <button @click="updateCounter(-1)" class="btn btn-danger">Subtract</button>
    </div>
</template>

<script>
  export default {
    methods: {
      updateCounter(val) {
        this.$store.dispatch('asyncCount', {
          currentVal: val,
          time: 1000
        })
      }
    }
  }
</script>

<style scoped>

</style>
