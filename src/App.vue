<template>
  <div class="container text-center pt-5">
    <h1>{{title}}</h1>
    <hr>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>

    <app-pop-up></app-pop-up>
  </div>
</template>

<script>
  import Counter from './Counter'
  import Actions from './Actions'
  import SecondCounter from './SecondCounter'
  import PopUp from './PupUp'

  export default {
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecondCounter: SecondCounter,
      AppPopUp: PopUp
    },
    computed: {
      title() {
        return this.$store.getters.title
      }
    }
  }
</script>

<style scoped>
  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: gray;
  }
</style>