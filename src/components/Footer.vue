<template>
   <footer class="footer">
      <div class="footer__name">in(dex)</div>
      <div class="Footer__info">
         <div class="footer__address">172 Classon Avenue. <br> Brooklyn, NY 11205. <br> USA</div>

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
      </div>
   </footer>
</template>

<script>

</script>

<style>

   .footer {
      display: flex;
      height: 289px;
      width: 100%;
      margin-top: 500px;
      justify-content: space-between;
      padding: 20px;
   }

   .footer__name {
      width: 149.75px;
      height: 45.67px;
   }

   .footer__info {
      display: flex;
      transform: translateX(-25%);
      width: 45%;
   }

   .footer__address {
      margin-top: 20px;
      width: 385.06px;
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

   footer div, a {
      font-size: 30px;
   }

   a {
      color: black;
      text-decoration: none;
   }

   .footer a:hover {
      color: var(--highlight-color);
   }

   @media screen and (max-width: 1100px) {
      .footer__address {
         display: none;
      }

      .footer {
         justify-content: space-between;
      }
   }

</style>