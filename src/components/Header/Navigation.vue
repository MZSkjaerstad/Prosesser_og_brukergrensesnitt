<template>
   <div class="navigation">
      <div class="nagigation__links navigation__item">
         <div class="navigation__link-container" v-for="link in navigation">
            <router-link class="navigation__link" :to="`${link.routerLink}`">{{ link.title }}</router-link>
         </div>
      </div>

      <div class="navigation__contact navigation__item">
         <div class="navigation__link-container">
            <router-link class="navigation__link" :to="{path:'about'}">About us</router-link>
         </div>

         <div class="navigation__link-container">
            <a href="" class="navigation__link" target="_blank">Instagram</a>
         </div>

         <div class="navigation__link-container">
            <a href="" class="navigation__link" target="_blank">Twitter</a>
         </div>
         
         <div class="navigation__link-container">
            <a href="mailto:ind@dex.info" class="navigation__link">ind@dex.info</a>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      
      data() {
         return {
         /* links: [
            {title: 'Announcement', routerLink:'/announcement'},
            {title: 'Journal', routerLink:'/'},
            {title: 'Architecture', routerLink:'/'},
            {title: 'Video & Film', routerLink:'/'},
            {title: 'Live', routerLink:'/'},
            {title: 'Notes', routerLink:'/'},
            {title: 'Books', routerLink:'/'},
            {title: 'Projects', routerLink:'/'},
            {title: 'Podcasts', routerLink:'/'},
      ], */
         }
      },

      computed: {
         navigation: function(){
            const links = this.$store.getters.getNavigation
            console.log(links)
            return links
         }
      }
   }
</script>

<style>
	.navigation {
      width: 100%;
		height: auto;
      background: var(--background);
      display: flex;
      justify-content: space-evenly;
	}

   .navigation__item {
      display: flex;
      flex-direction: column;
   }

   .navigation__link-container {}

   .navigation__link-container:hover .navigation__link {
      color: var(--highlight-color);
   }

   .navigation__link {
      color: var(--primary-color);
      text-decoration: none;
   }

   
</style>