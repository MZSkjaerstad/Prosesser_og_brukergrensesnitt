<template>
   <div class="navigation">
      <div class="nagigation__links navigation__item">
         <div class="navigation__link-container" v-for="link in navigation">
            <router-link class="navigation__link" :to="{path: link.routerLink, props: link.routerProps}">{{ link.title }}</router-link>
         </div>
      </div>

      <div class="navigation__contact navigation__item">
         <div class="navigation__link-container">
            <router-link class="navigation__link" :to="{path:'about'}">About us</router-link>
         </div>

         <br>

         <div class="navigation__link-container">
            <a href="" class="navigation__link" target="_blank">Instagram ↗</a>
         </div>

         <div class="navigation__link-container">
            <a href="" class="navigation__link" target="_blank">Twitter ↗</a>
         </div>

         <br>
         
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
      width: 60%;
		height: auto;
      background: var(--background);
      display: flex;
      justify-content: space-evenly;
	}

   .navigation__item {
      display: flex;
      flex-direction: column;
      transform: translateX(50%);
   }

   .navigation__link-container {
      width: auto;
      height: auto;
   }

   .navigation__link-container:hover .navigation__link {
      color: var(--highlight-color);
   }

   .navigation__link {
      color: var(--primary-color);
      text-decoration: none;
   }

   @media screen and (max-width: 1100px) {
      .navigation {
         width: 40%;
      }

      .navigation__contact {
         display: none;
      }

      .navigation__item {
         transform: translateX(0%);
      }

      .navigation__link {
         font-size: 40px;
      }
   }

</style>