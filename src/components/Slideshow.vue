     
<template>
   <section class="journal">
      <h2 class="journal__header">Journal</h2>
      <button class="journal__slideshow" @click="next()">
         <div class="slideshow__caption">
            <div class="caption__text"> "{{ journal[index].title }}" </div>   
            <div class="caption__text"> {{ journal[index].location }} </div>
            <div class="caption__text"> {{ journal[index].artist }} </div>   
         </div>
         <div class="journal__dots">
            <button @click="goToIndex(index)" v-for="(image, index) in journal" class="dots__dot" > </button>
         </div>
         <img class="slideshow__image" :src="journal[index].image" :alt="journal[index].title">
      </button>
   </section>

</template>

<style>

   .journal {
      display: grid;
      justify-content: center;
      width: 100vw;
   }

   .journal__header {
      text-align: center;
      font-size: 30px;
      margin-bottom: 40px;
      font-family: var(--font-family);
      font-weight: 400;
   }

   .journal__slideshow {
      width: 100vw;
      height: auto;
      padding: none;
      border: none;
      background: none;
   }

   .slideshow__caption {
      position: absolute;
      width: fit-content;
      height: 198px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 457px;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 50px;
      font-weight: 400;
   }

   .caption__text {
      color: white;
      font-family: var(--font-family);
      font-weight: 400;
   }

   .slideshow__image {
      width: 1899px;
      height: 1113px;
   }

   .journal__dots {
      position: relative;
      top: 1059px;
      height: fit-content;
   }

   .dots__dot {
      height: 24px;
      width: 24px;
      border-radius: 50%;
      margin: 0px 20px;
      background: none;
      border-color:  white;
      border-width: 2px;
   }

   .dots__dot:hover {
      background: white;
   }
</style>

<script>
   export default {
      data() {
         return {
            index: 0,
            journal: [
               {
                  title: 'And My Flames Stay Till You Get Out My Way',
                  artist: 'April Bey',
                  location: 'Museum für Moderne Kunst',
                  image: './assets/images/journal_1.jpeg'
               },
               {
                  title: 'Crip Time',
                  artist: 'Kenny Fries',
                  location: 'Vienna Art Week',
                  image: './assets/images/journal_2.jpeg'
               },
               {
                  title: 'Losing Control',
                  artist: 'Alte Pinakothek',
                  location: 'Novuyo Moyo',
                  image: './assets/images/journal_3.jpeg'
               },
            ],
         };
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

         // curent index = white
      }  
   }
</script>

