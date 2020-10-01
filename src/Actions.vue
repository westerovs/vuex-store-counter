<template>
    <div>
        <button @click="updateCounter(+1)" class="btn btn-success">Добавить</button>
        <button @click="updateCounter(-1)" class="btn btn-danger">Уменьшить</button>
    </div>
</template>

<script>
export default {
    methods: {
        updateCounter(val) {
            this.$store.dispatch("asyncCount", {
                currentVal: val,
                time: 1000,
            });
        },
    },
};
</script>

<style scoped>
</style>
