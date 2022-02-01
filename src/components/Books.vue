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
        padding: var(--spacing-large) 10px;
    }

    .books__title {
        width: 100%;
        font-size: var(--font-size-body);
        display: flex;
        justify-content: center;
        padding:0px 0px var(--spacing-medium) 0px;
    }

    .books__display {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 10px;
        row-gap: var(--spacing-medium);
    }

    .books__book {
        grid-column: span 2;
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
        font-size: var(--font-size-small);
    }

    .book__title {
        font-size: var(--font-size-small);
    }

    @media screen and (max-width: 1100px) {
        .books__display {
            grid-template-columns: repeat(12, 1fr);
        }

        .books__book {
            grid-column: span 4;
        }
    }
</style>