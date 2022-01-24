<template>
   <footer class="footer">
      <div class="footer__name">in(dex)</div>
      <div class="footer__address">172 Classon Avenue. Brooklyn, NY 11205. USA</div>
      <!-- 
         seksjonen i figma filen er 5px for lang 
         mangler også informasjon om avstand og om pil-ikon
      -->

      <div class="footer__social">
         <a class="social__about" href="">About us</a>
         <a class="social__link" href="">Instagram</a>
         <a class="social__link" href="">Twitter</a>
         <div class="social__email">in@dex.info</div>
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
      border: solid;
      display: flex;
      height: 289px;
      width: 1936px;
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
   
   .footer__social {
      display: grid;
      margin-top: 20;
      margin-left: 91.94;
      width: 235.32px;
      height: 274px;
   }

</style>