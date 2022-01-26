<template>
    <div class="books">
        <div class="books__title">Books</div>
        <div class="books__display">
            <div class="books__book" v-for="book in books">
                <img class="books__cover" :src="`${books.cover}`" :alt="`${books.cover}`">

                <div class="books__information">
                    <div class="books__title"> {{ books.title }} </div>

                    <div class="books__writers"> {{ books.writers }} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        books: [
            {
                title: 'Radicalizing Care',
                writers: 'Birgit Bosold, Lena Fritsch, Vera Hofmann, Elke Krasny, Sophie Lingg',
                cover: 'book_1.jpg'
            },
            {
                title: 'Curating the Complex & The Open Strike',
                writers: 'TERRY SMITH',
                cover: 'book_2.jpg'
            },
            {
                title: 'Amazonia',
                writers: 'KATERYNA BOTANOVA, QUINN LATIMER',
                cover: 'book_3.jpg'
            },
            {
                title: 'Parapolitics',
                writers: 'ANSELM FRANKE, NIDA GHOUSE, PAZ GUEVARA, ANTONIA MAJACA (EDS.)',
                cover: 'book_4.jpg'
            },
            {
                title: 'Visual Cultures as Time Travel',
                writers: 'HENRIETTE GUNKEL, AYESHA HAMEED',
                cover: 'book_5.jpg'
            },
            {
                title: 'Dear Navigator',
                writers: 'HU FANG',
                cover: 'book_6.jpg'
            },
        ],
    }
</script>

<style>
 .books {
    width: 100%;
 }

 .books__display {

 }

 .books__cover {
     
 }

</style>