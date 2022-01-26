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
            <button @click="goToIndex(index)" v-for="(image, index) in journal" class="dots__dot" > </button>
         </div>
      </button>
   </section>

</template>

<style>
   .journal {
      display: grid;
      justify-content: center;
      width: 100%;
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
      height: auto;
      padding: none;
      border: none;
      background: none;
      display: grid;
   }

   .slideshow__caption {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: fit-content;
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

   @media screen and (max-width: 1100px){
      .caption__text {
         font-size: 30px;
      }
   }

   .slideshow__image {
      width: 100vw;
   }

   .journal__dots {
      position: absolute;
      top: 95%;
      left: 50%;
      transform: translate(-50%, -50%);
      justify-self: center;
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

