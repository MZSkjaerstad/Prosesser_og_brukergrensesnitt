<template>
    <main class="articles">
        Latest
        <div class="articles__latest">
            <RouterLink :to="{ path: `/${ latestArticle.slug }` }"><div class="latest__title">
                {{ latestArticle.title }}
            </div>

            <div class="latest__text">
               {{ latestArticle.lead }}
            </div>

            <figure class="latest__picture-frame">
                <img class="latest__picture" :src="`${latestArticle.picture}`" alt="">
            </figure>
            </RouterLink>
        </div>

        <div class="articles__next">
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
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-top: var(--spacing-medium);
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);
        width: 100%;
        padding: 20px 10px;
    }

    /* LATEST */

    .articles__latest {
        width: 75%;
    }

    .latest__title {
        padding-top: var(--spacing-medium);
        font-size: var(--font-size-large);
    }

    .latest__text {
        padding: var(--spacing-small) var(--spacing-small) 0px;
        font-size: var(--font-size-small);
    }

    .latest__picture-frame {
        width: 100%;
        padding-top: var(--spacing-medium);   
    }

    .latest__picture {
        width: 100%;
    }

    /* NEXT */

    .articles__next {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10px;
        padding-top: var(--spacing-large);
    }

    .next__article {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        width: 100%;
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

    @media screen and (max-width: 1100px) {
        .articles {
            padding: var(--spacing-medium) 0px 0px;
        }

        .articles__latest {
            width: 100%;
            padding: 10px;
        }

        .articles__next {
            grid-template-columns: repeat(1, 1fr);
            padding: 10px;
        }
    }
</style>