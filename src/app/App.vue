<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<script>
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header/Header.vue';
    export default {
        components: {
          Header
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