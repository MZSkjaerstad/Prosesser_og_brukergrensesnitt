<template>
   <footer class="footer">
      <div class="footer__logo"> <Logo /> </div>
      <div class="footer__address">172 Classon Avenue. Brooklyn, NY 11205.<br> USA</div>

      <div class="footer__contact">
         <router-link class="navigation__link footer__link" :to="{path:'about-us'}">About us</router-link>
         <br><br>
         <a class="social__link footer__link" href="">Instagram ↗</a> <br>
         <a class="social__link footer__link" href="">Twitter ↗</a>
         <br><br>
         <a href="mailto:ind@dex.info" class="contact__email">in@dex.info</a>
      </div>
   </footer>
</template>

<script>
import Logo from "./header/Logo.vue"

export default {
   components: {
      Logo,
   }
}
</script>

<style>

   .footer {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      width: 100%;
      padding: var(--spacing-small);
   }

   .footer__logo {
      grid-column: 1;
   }

   .footer__address {
      grid-column: 6 / span 4;
      padding-right: var(--spacing-small);
   }
   
   .footer__contact {
      grid-column: 10 / span 3;
   }

   .footer__link {
      font-size: var(--font-size-body);
   }

   a {
      color: black;
      text-decoration: none;
   }

   .footer a:hover {
      color: var(--highlight-color);
   }

   @media screen and (max-width: 900px) {
      .footer {
         grid-template-columns: repeat(3, 1fr);
      }

      .footer__address {
         display: none;
      }

      .footer__contact {
         grid-column: 3 / span 1;
      }
   }
</style>