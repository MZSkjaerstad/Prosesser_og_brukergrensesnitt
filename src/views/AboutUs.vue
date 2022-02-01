<template>
      <section class="about-us ">
      <div class="about-us__details">
         <h1 class="about-us__title"> {{ page.content.title }} </h1>
         <div class="about-us__body">   
            <p class="body__paragraf"> {{ page.content.body[0] }} </p>
            <p class="body__paragraf"> {{ page.content.body[1] }} </p>
            <p class="body__paragraf"> {{ page.content.body[2] }} </p>
            <p class="body__paragraf"> {{ page.content.body[3] }} </p>
         </div>
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
      display: grid;
      grid-template-columns: repeat(12, 1fr);
   }

   .about-us__details {
      grid-column: 3 / span 8;
        grid-row: 1;
   }

   .about-us__title {
      text-align: center;
      font-size: var(--font-size-large);
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

   @media only screen and (max-device-width : 767px) and (-webkit-min-device-pixel-ratio : 2) {
      .about-us__details {
         grid-column: 1 / span 12;
         padding: 0 var(--spacing-small);
      }

      .about-us__title {
         margin-top: var(--spacing-small);
         margin-bottom: var(--spacing-medium);
      }

      .body__paragraf {
         font-size: 16px;
         margin-bottom: var(--spacing-small);
      }
	}

   @media only screen and (min-device-width : 768px) and (max-device-width : 1000px) {
      .about-us__details {
         grid-column: 1 / span 12;
         padding: 0 var(--spacing-small);
      }

      .about-us__title {
         margin-top: var(--spacing-small);
         margin-bottom: var(--spacing-medium);
      }

      .body__paragraf {
         font-size: 18px;
      }
	}

   @media only screen  and (min-device-width : 1001px) and (max-device-width : 1200px) {
      .body__paragraf {
         font-size: 22px;
      }
	}
</style>