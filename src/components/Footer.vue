<template>
   <footer class="footer">
      <div class="footer__name">in(dex)</div>
      <div class="footer__address">172 Classon Avenue. Brooklyn, NY 11205. USA</div>
      <!-- 
         seksjonen i figma filen er 5px for lang 
         mangler også informasjon om avstand og om pil-ikon
      -->

      <div class="footer__contact">
         <a class="contact__about" href="">About us</a>
         <div class="contact__social">
            <a class="social__link" href="">Instagram ↗</a>
            <a class="social__link" href="">Twitter ↗</a>
         </div>
         <a href="mailto:ind@dex.info" class="contact__email">in@dex.info</a>
      </div>
   </footer>
</template>

<script>

</script>

<style>

   footer div, a {
      font-size: 30px;
   }

   a {
      color: black;
      text-decoration: none;
   }

   .footer {
      display: flex;
      height: 289px;
      width: 100vw;
      margin-top: 500px;
   }

   .footer__name {
      margin-top: 20px;
      margin-left: 20px;
      width: 149.75px;
      height: 45.67px;
   }

   .footer__address {
      margin-top: 20px;
      margin-left: 804.25px;
      width: 385.06;
      height: 137px;
   }
   
   .footer__contact {
      display: grid;
      margin-top: 20;
      margin-left: 91.94;
      width: 236.32px;
      height: 274px;
   }


   .social__link {
      display: grid;
   }

   .footer a:hover {
      color: var(--highlight-color);
   }

</style>