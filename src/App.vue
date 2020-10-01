<template>
    <div class="container text-center pt-5">
        <Title />
        <SecondCounter />
        <Actions />
    </div>
</template>

<script>
import Title from "./Title";
import Actions from "./Actions";
import SecondCounter from "./SecondCounter";
import PopUp from "./PupUp";

export default {
    components: {
        Title,
        Actions,
        SecondCounter,
        PopUp,
    },
};
</script>

<style>
body {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: gray;
}
</style>