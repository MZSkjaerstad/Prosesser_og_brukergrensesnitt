<template>
    <Header />
    <RouterView />
</template>

<script>
    // Test
    import Header from '../components/Header/Header.vue';
    export default {
        components: {
          Header
        }
    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>