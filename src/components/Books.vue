<template>
    <div class="books">
        <div class="books__title">Books</div>
        <div class="books__display">
            <div class="books__book" v-for="book in books">
                <div class="book__imgframe">
                    <img class="book__cover" :src="`/assets/images/${book.cover}`" :alt="`${book.title}`">
                </div>

                <div class="book__information">
                    <div class="book__writers"> {{ book.writers }} </div>

                    <div class="book__title"> {{ book.title }} </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            books: function() {
                const books = this.$store.getters.getBooks

                return books
            }
        }
    }
</script>

<style>
    .books {
        width: 100%;
        padding: 100px 10px;
    }

    .books__title {
        width: 100%;
        font-size: var(--font-size);
        display: flex;
        justify-content: center;
        padding:0px 0px 40px 0px;
    }

    .books__display {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 10px;
        row-gap: 40px;
    }

    .book__imgframe {
        width: 100%;
    }

    .book__cover {
        width: 100%;
    }

    .book__writers {
        padding-top: 10px;
        text-transform: uppercase;
    }

    @media screen and (max-width: 1100px) {
        .books__display {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }


</style>