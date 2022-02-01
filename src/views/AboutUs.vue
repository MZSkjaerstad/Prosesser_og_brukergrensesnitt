<template>
   <section class="about-us ">
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
      width: 100%;
      display: grid;
      justify-content: center;
      padding: 0 336px;
   }

   .about-us__title {
      text-align: center;
      font-size: var(--font-size-large);
      font-weight: 400;
      margin-top: var(--spacing-medium);
      margin-bottom: var(--spacing-large);
   }

   .about-us__body {
      margin-bottom: var(--spacing-large);
   }

   .body__paragraf {
      font-size: var(--font-size);
      margin-bottom: var(--spacing-medium);
   }
</style>