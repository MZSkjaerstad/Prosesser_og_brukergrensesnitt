<template>
    <Header />
    <AnnouncementBar />
    <RouterView />
    <Footer />
</template>

<script>
    import Header from '../components/Header/Header.vue';
    import AnnouncementBar from '../components/AnnoucementBar.vue';
    import Footer from '../components/Footer.vue'
    export default {
        components: {
          Header,
          AnnouncementBar,
          Footer,
        }
    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';
</style>