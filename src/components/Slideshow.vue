<template>
   <section class="journal">
      <h2 class="journal__header">Journal</h2>
      <button class="journal__slideshow" @click="next()">
         <img class="slideshow__image" :src="journal[index].image" :alt="journal[index].title">
         <div class="slideshow__caption">
            <p class="caption__text"> “{{ journal[index].title }}” </p>   
            <p class="caption__text"> {{ journal[index].location }} </p>
            <p class="caption__text"> {{ journal[index].artist }} </p>   
         </div>
         <div class="journal__dots">
            <button @click="goToIndex(index)" v-for="(image, index) in journal" :class="this.index === index ? 'dots__dot--active' : 'dots__dot'" ></button>
         </div>
      </button>
   </section>
</template>

<script>
   export default {
      data() {
         return {
            index: 0
         };
      },

      computed: {
         journal: function(){
            const journal = this.$store.getters.getJournal
            return journal
         }
      },
      
      methods: {
         next() {
            if (this.journal.length === this.index + 1) {
               this.index = 0;
            }

            else {
               this.index += 1;
            }
         },

         goToIndex(index) {
				this.index = index;
			},
      }
   }
</script>

<style>
   .journal {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      justify-content: center;
      width: 100%;
      padding: 10px;
   }

   .journal__header {
      grid-column: 6 / span 2;
        grid-row: 1;
      text-align: center;
      
      margin-bottom: var(--spacing-medium);
   }

   .journal__slideshow {
      grid-column: 1 / span 12;
      display: flex;
      grid-row: 2;
      position: relative;
      text-align: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: none;
      border: none;
      background: none;
      cursor: pointer;
   }

   .slideshow__caption {
      grid-column: 6 / span 2;
      grid-row: 1;
      position: absolute;
      top: 50%;
      transform: translate(-0%, -50%);
      width: 100%;
      text-align: center;
      font-size: var(--font-size-large);
   }

   .caption__text {
      color: var(--background);
      font-size: var(--font-size-large);
      text-shadow: 0px 0px 4px #00000067;
   }

   .slideshow__image {
      object-fit: cover;
      width: 100%;
      height: 100%;
      min-height: 100%;
   }

   .journal__dots {
      position: absolute;
      top: 95%;
      left: 0%;
      transform: translate(0%, -50%);
      justify-self: center;
      height: fit-content;
      width: 100%;
   }

   .dots__dot {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      margin: 0px var(--spacing-small);
      background: none;
      border: solid 1px white;
      border-width: 2px;
      cursor: pointer;
   }

   .dots__dot--active {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      margin: 0px var(--spacing-small);
      background: none;
      border: solid 1px white;
      border-width: 2px;
      cursor: pointer;
      background: white;
   }

   @media only screen and (max-device-width : 767px) and (-webkit-min-device-pixel-ratio : 2) {
      .caption__text {
         font-size: var(--font-size-small);
      }

      .dots__dot, .dots__dot--active {
         height: 12px;
         width: 12px;
      }
   }

   @media only screen and (min-device-width : 768px) and (max-device-width : 1000px) {
      .caption__text {
         font-size: var(--font-size-body);
      }

      .dots__dot, .dots__dot--active {
         height: 16px;
         width: 16px;
      }
   }

   @media only screen  and (min-device-width : 1001px) and (max-device-width : 1200px) {
      .caption__text {
         font-size: var(--font-size-body);
      }

      .dots__dot, .dots__dot--active {
         height: 20px;
         width: 20px;
      }
   }
</style>