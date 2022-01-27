<template>
    <Header class="header-mount" />
    <AnnouncementBar class="announcment-mount" />
    <RouterView />
    <SubscribePopup />
    <Footer />
</template>

<script>
    import Header from '../components/Header/Header.vue';
    import AnnouncementBar from '../components/AnnoucementBar.vue';
    import Footer from '../components/Footer.vue';
    import SubscribePopup from '../components/SubscribePopup/SubscribePopup.vue';
    export default {
        components: {
          Header,
          AnnouncementBar,
          Footer,
          SubscribePopup,
        }
    }
</script>

<style>
    @import '../style/reset.css';
    @import '../style/fonts.css';
    @import '../style/variables.css';
    @import '../style/style.css';

    .header-mount {
        z-index: 14;
    }

    .announcement-mount {
        z-index: 10;
    }
</style>