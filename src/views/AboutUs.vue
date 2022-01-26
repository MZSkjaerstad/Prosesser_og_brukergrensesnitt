<template>
   <section class="about-us">
      <h1 class="about-us__title"> {{ page.content.title }} </h1>
      <div class="about-us__body">   
         <p class="body__paragraf"> {{ page.content.body[0] }} </p>
         <p class="body__paragraf"> {{ page.content.body[1] }} </p>
         <p class="body__paragraf"> {{ page.content.body[2] }} </p>
         <p class="body__paragraf"> {{ page.content.body[3] }} </p>
      </div>
      
   </section>
   
</template>

<script>


export default {
   data() {
      return {
         
      }
   },
   computed: {
         page: function(){
            const page = this.$store.getters.getPage
            return page
         }
      },
}
</script>

<style>
   .about-us {
      width: 100vw;
      display: grid;
      justify-content: center;
   }

   .about-us__title {
      text-align: center;
      font-size: 50px;
      font-weight: 400;
      width: 1260px;
      height: 132px;
      margin-top: 167px;
      margin-bottom: 99px;
   }

   .about-us__body {
      width: 1260px;
      margin-bottom: 120px;
   }

   .body__paragraf {
      font-size: var(--font-size);
      margin-bottom: 39.6px;
   }
</style>