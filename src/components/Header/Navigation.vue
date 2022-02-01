<template>
   <div class="navigation">
      <div class="navigation__links navigation__item">
         <div class="navigation__link-container" v-for="link in navigation">
            <router-link class="navigation__link" :to="{path: link.routerLink, props: link.routerProps}">{{ link.title }}</router-link>
         </div>
      </div>

      <div class="navigation__contact navigation__item">
         <div class="navigation__link-container">
            <router-link class="navigation__link" :to="{path:'about-us'}">About us</router-link>
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
      background: var(--secondary-color);
      padding: var(--spacing-small);
      display: grid;
      grid-template-columns: repeat(12, 1fr);
	}

   .navigation__item {
      display: flex;
      flex-direction: column;
   }

   .navigation__links {
      grid-column: 6 / span 2;
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

   .navigation__contact {
      grid-column: 9 / span 3;
   }

   @media screen and (max-width: 1100px) {
      .navigation {
         width: 100%;
         grid-template-columns: repeat(1, 1fr);
      }

      .navigation__links {
         grid-column: 1 / span 1;
      }

      .navigation__contact {
         display: none;
      }

      .navigation__link {
         font-size: var(--font-size-medium);
      }
   }

</style>