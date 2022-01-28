<template>
   <section class="journal">
      <h2 class="journal__header">Journal</h2>
      <button class="journal__slideshow" @click="next()">
         <img class="slideshow__image" :src="journal[index].image" :alt="journal[index].title">
         <div class="slideshow__caption">
            <div class="caption__text"> "{{ journal[index].title }}" </div>   
            <div class="caption__text"> {{ journal[index].location }} </div>
            <div class="caption__text"> {{ journal[index].artist }} </div>   
         </div>
         <div class="journal__dots">
            <button @click="goToIndex(index)" v-for="(image, index) in journal" class="dots__dot" ></button>
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
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 10px;
   }

   .journal__header {
      text-align: center;
      font-size: 30px;
      margin-bottom: 40px;
      font-family: var(--font-family);
      font-weight: 400;
   }

   .journal__slideshow {
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
      position: absolute;
      top: 50%;
      transform: translate(-0%, -50%);
      width: 100%;
      height: 198px;
      text-align: center;
      font-size: 50px;
      font-weight: 400;
   }

   .caption__text {
      color: white;
      font-family: var(--font-family);
      font-weight: 400;
   }

   @media screen and (max-width: 1500px){
      .slideshow__caption {
         top: 60%;
      }

      .caption__text {
         font-size: 20px;
      }
   }

   .slideshow__image {
      object-fit: cover;
      width: 100vw;
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
      margin: 0px 20px;
      background: none;
      border: solid 1px;
      border-color: white;
      border-width: 2px;
      cursor: pointer;
   }

   .dots__dot:hover {
      background: white;
   }

   @media screen and (max-width: 1100px){
      .journal {
         padding: 0px;
         height: 50%;
      }

      .journal__header {
         margin-bottom: 40px;
      }

      .journal__slideshow {
         height: 90%;
      }

      .slideshow__image {
         width: auto;
         height: 100%;
      }

      .slideshow__caption {
         top: 80%;
      }

      .caption__text {
         font-size: 20px;
      }
   }
</style>