<template>
    <main class="articles">
        <div class="articles__latest">
            Latest
            <RouterLink :to="{ path: `/${ latestArticle.slug }` }">
                <div class="latest__info">
                    <div class="latest__title">
                        {{ latestArticle.title }}
                    </div>

                    <div class="latest__text">
                    {{ latestArticle.lead }}
                    </div>
                </div>

                <figure class="latest__picture-frame">
                    <img class="latest__picture" :src="`${latestArticle.picture}`" alt="">
                </figure>
            </RouterLink>
        </div>

        <div class="articles__next">
            <div class="next__containter">
                <div class="next__article" v-for="article in nextArticle" >
                    <RouterLink class="next__link" :to="{ path: `/${ article.slug }` }">
                        <div class="next__title">
                            {{ article.title }}
                        </div>

                        <div class="next__text">
                            {{ article.lead }}
                        </div>

                        <figure class="next__picture-frame">
                            <img class="next__picture" :src="`${article.picture}`"/>
                        </figure>
                    </RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                nextArticle: null
            }
        },

        computed: {
            articles: function() {
                const articles = this.$store.getters.getArticles
                console.log(articles, "Hello")
                return articles
            },

            latestArticle: function() {
                const latestArticle = this.$store.getters.getLatestArticle
                return latestArticle
            },

            nextArticle: function() {
                const nextArticle = this.$store.getters.getNextArticle
                console.log(nextArticle)
                return nextArticle
            }
        }
    }
</script>

<style>
    .articles {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        text-align: center;
        padding: var(--spacing-medium) 10px 0 10px;
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);
        width: 100%;
    }

    /* LATEST */


    .articles__latest {
        grid-column: 2 / span 10;
        grid-row: 1;
    }

    .latest__info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .latest__title {
        width: 80%;
        padding-top: var(--spacing-medium);
        font-size: var(--font-size-large);
        grid-column: 2 /span 8;
        grid-row: 1;
    }

    .latest__text {
        width: 80%;
        padding-top: var(--spacing-small);
        font-size: var(--font-size-small);
        grid-column: 3 /span 6;
        grid-row: 2;
    }

    .latest__picture-frame {
        grid-row: 3;
        width: 100%;
        height: auto;
        padding-top: var(--spacing-medium);   
    }

    .latest__picture {
        width: 100%;
        height: auto;
    }

    /* NEXT */

    .articles__next {
        grid-column: 1 / span 12;
        grid-row: 2;
        column-gap: 10px;
        padding-top: var(--spacing-large);
    }

    .next__containter {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 10px;
    }

    .next__article {
        grid-column: span 6;
        text-align: center;
        padding-top: var(--spacing-medium);
        font-size: var(--font-size-body);
        font-weight: 400;
        width: 100%;
    }

    .next__link {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .next__title {
        font-size: var(--font-size-large);
        width: 80%;
    }

    .next__text {
        width: 80%;
        padding-top: var(--spacing-small);
        font-size: var(--font-size-small);
    }

    .next__picture-frame {
        width: 100%;
        height: auto;
        padding-top: var(--spacing-medium);
    }

    .next__picture {
        width: 100%;
    }

    @media screen and (max-width: 900px) {
        .articles {
            padding: var(--spacing-medium) 0px 0px;
        }

        .articles__latest {
            grid-column: 1 / span 12;
        }

        .next__article {
            grid-column: span 12;
        }
    }
</style>