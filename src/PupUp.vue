<template>
    <div class="pup-up">
        <h2 class="title">Counter: {{counter}}</h2>
    </div>
</template>

<script>
export default {
    computed: {
        counter () {
            return this.$store.getters.computedCounter
        }
    }
}
</script>

<style>
    .pup-up {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50px;
        background: blue;
        opacity: 0.5;
        color: white;
    }

    .title {
        line-height: 50px;
    }
</style>