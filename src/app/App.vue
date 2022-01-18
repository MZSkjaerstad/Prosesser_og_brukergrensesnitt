<template>
    <RouterView />
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
    //import Header from '../components/Header.vue';
    export default {
        components: {

            Footer
        }
    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>