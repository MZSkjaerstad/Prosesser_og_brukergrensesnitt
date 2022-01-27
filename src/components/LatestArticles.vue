<template>
    <main class="articles">
        Latest
        <div class="articles__latest" >
            <div class="latest__title">
                <RouterLink :to="{ name: 'article-by-krzysztof' }">The Institute of the Cosmos</RouterLink>
            </div>

            <div class="latest__text">
                The Institute of the Cosmos is an ongoing collective research project founded in 2019. Informed by the historical ideas of Russian Cosmism, the Institute is a space for a creative investigation of the materiality of the cosmos and its strange universalism, from the perspectives of philosophy, anthropology, history of science, and art.
            </div>

            <figure class="latest__picture">
                <img class="latest__pic" src="assets/images/article_1.jpeg" alt="">
            </figure>
        </div>

        <div class="articles__next">
            <div class="next__article" v-for="article in articles">
                <div class="next__title">
                    <RouterLink :to="{ name: 'article-by-daniel' }">{{ article.title }}</RouterLink>
                </div>

                <div class="next__text">
                    {{ article.text }}
                </div>

                <figure class="next__picture">
                    <img class="picture" :src="article.picture"/>
                </figure>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                articles: [
                    // {
                    //     title: 'The Institute of the Cosmos',
                    //     picture: '/assets/images/article_1.jpeg',
                    //     text: 'The Institute of the Cosmos is an ongoing collective research project founded in 2019. Informed by the historical ideas of Russian Cosmism, the Institute is a space for a creative investigation of the materiality of the cosmos and its strange universalism, from the perspectives of philosophy, anthropology, history of science, and art.'
                    // },

                    {
                        title: 'Jimmie Durham',
                        picture: '/assets/images/article_2.jpeg',
                        text: 'Let others wax eloquent about essences and fixed forms, ethnic identities, automobiles and Opera Houses. For Jimmie the humor was low key, bitter, and funny all at once, something on the move making you smile inwardly while trying to keep up with the shifting focus your unsettled understandings provoked.'
                    },

                    {
                         title: 'Mutual Aid, Social Distancing, and Dual Power in the State of Emergency',
                         name: 'article-by-daniel',
                         picture: '/assets/images/article_3.jpeg',
                         text: 'For the elites, this might be an ungovernable world. But we still have many worlds to propagate, to live and love in comradely care.'
                    }
                ]
            }
        },

        computed: {
            article: function () {
                const article = this.$store.getters.getArticles
                
                return article[1]
            }
        }
    }
</script>

<style>
    .articles {
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-top: 40px;
        font-size: 30px;
        font-weight: 400;
        width: 100%;
        padding: 20px;
    }

    @media screen and (min-width: 768px) {
        .articles {
            padding: 40px 0px 0px;
        }
    }

    .latest__title {
        padding-top: 40px;
        font-size: 50px;
    }

    .latest__text {
        padding: 20px 20px 0px;
        font-size: 20px;
    }

    @media screen and (min-width: 768px) {
        .latest__text {
            padding: 20px 400px 0px;
        }
    }

    .latest__picture {
        padding-top: 40px;   
    }

    .latest__pic {
        width: 100%;
    }

    .articles__next {
        padding-top: 90px;
    }

    @media screen and (min-width: 768px) {
        .articles__next {
            display: flex;
            padding: 23px;
        }
    }

    .next__title {
        font-size: 50px;
    }

    .next__text {
        padding-top: 20px;
    }

    @media screen and (min-width: 768px) {
        .next__text {
            padding: 20px 80px 0px;
            font-size: 20px;
        }
    }

    .next__picture {
        width: 660px;
        padding-top: 40px;
    }

    @media screen and (min-width: 768px) {
        .next__picture {
            width: 675px;
        }
    }

    .picture {
        width: 100%;
    }

    .next__article {
        text-align: center;
        padding-top: 40px;
        font-size: 30px;
        font-weight: 400;
        width: 100%;
    }
</style>