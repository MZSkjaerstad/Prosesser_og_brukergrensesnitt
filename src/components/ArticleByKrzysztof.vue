<template>
    <main class="article">
        <div class="article__author">
            {{ article.author }}
        </div>

        <div class="article__title">
            {{ article.title }}
        </div>

        <figure class="article__picture">
			<img class="picture" :src="article.picture"/>
		</figure>

        <div class="article__caption">
            {{ article.caption }}
        </div>

        <div class="article__text">
            <div class="text">
                {{ article.text_1 }}
            </div>

            <div class="text">
                {{ article.text_2 }}
            </div>

            <div class="text">
                {{ article.text_3 }}
            </div>

            <div class="text">
                {{ article.text_4 }}
            </div>

            <div class="text">
                {{ article.text_5 }}
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    author: 'Krzysztof Gutfranski',
                    title: 'The Institute of the Cosmos',
                    picture: '/assets/images/article_1.jpeg',
                    caption: 'Liz Craft, She is looking at me, 2015. Ceramic, aluminium, 84 x 82 x 12 cm.',
                    text_1: 'The Polish magazine Obieg (Circuit) was launched in 1987, beginning as a bulletin; its name was a reference to a “third circuit” of publications that the magazine itself attempted to forge: autonomous from the dictates of the state, yet also distinct from the publications produced by the “official” political opposition, including the Solidarity movement and associated groups. The publication soon became one of the only periodicals in Polish to offer space for alternative communities and ideas; quickly, it grew into a trusted information guide and platform for exchanging what would become crucial historical perspectives and concepts. As Poland underwent seismic political changes, so did the magazine. In the 1990s, it was no longer a bulletin, but rather transformed into a fully fledged publication funded by the Ujazdowski Castle Centre for Contemporary Art (CCA Ujazdowski). Briefly suspended in 2002, the magazine resumed online in 2004. Notwithstanding that after a decade and a half it became aligned with a museum—a state institution after all—it retained autonomy to publish what it had always pursued.',
                    text_2: 'I was the editor of Obieg from January 2016 until July 2020. On my watch, Obieg stopped exclusively publishing reviews of the Polish art scene (2004–2015), to the dismay of the Warsaw art world. But we were adamant: our aim was to connect with the international world of art, to enrich the local scene rather than function merely as a self-serving echo chamber of a publicly funded exhibition venue, with the “usual suspects” tooting their own horns. The vast majority of Obieg ’s readers from Poland and beyond were art professionals, students in their early twenties, and others appreciative of our longer reads.',
                    text_3: 'The editorial team rose to the challenge of rebranding the magazine so that it spoke about art all over the world but from the perspective of Warsaw and Central-Eastern Europe, producing a globally oriented, bilingual publication, while also negotiating the complex situation of being funded by a Polish public institution subordinate to the Ministry of Culture and National Heritage. The journal kept away from adverts, short formats, and gossip. Its ambition—at a time when borders seemed to be closing again rather than opening and when the language of art had become standardized—was to reach out to the world with a message of openness. Key to Obieg’s formula was the imperative to upgrade the art map of Central and Eastern Europe, aiming to make the “peripheries” visible.',
                    text_4: 'We produced fifteen issues online, publishing over two hundred texts, essays, and visual pieces commissioned for the magazine; more than 50 percent of the contributors—unusually for Poland—were female. The fact that Obieg was bilingual meant that it had two distinct audiences: the Polish and Warsaw art scenes, and the wider international art world. We experimented with the language of art criticism, drawing on the legacy of the early Obieg of the 1980s and ’90s. Unusual for the era of clickbait, we rejected the fodder of mass appeal, ambitiously opting for themed issues and in-depth formats without a paywall to encourage access. We surfed on the stormy seas of theory, always in search of honest and accessible ways of writing about art and culture. We chose to forego commercial success and media hype for the sake of establishing and developing non-obvious, yet precious, connections.',
                    text_5: 'Despite our meagre budget, we managed to increase our fees for authors—regardless of their celebrity status or passport—as well as the fees for translators, guest editors, and all freelancers involved, to increase our reach and international community. Because of this, I believe, we were successful. After writing an essay for Obieg, someone from Lagos was granted a stipend in Johannesburg. Someone else came up with the idea of a biennial in northern Chile. New projects were conceived in Kyiv, Rijeka, Vilnius, and many other places. Channeled through Warsaw, people and ideas connected in fruitful collaboration.'
                }
            }
        }
    }
</script>


<style>
    .article__author {
        padding-left: 20px;
        padding-top: 40px;
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        .article__author {
            padding-left: 179px;
            font-size: 30px;
        }
    }

    .article__title {
        padding: 0px 20px;
        padding-bottom: 30px;
        font-size: 30px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        .article__title {
            padding: 0px 179px;
            font-size: 40px;
        }
    }

    .article__picture {
        display: flex;
        align-items: center;
        overflow: hidden;
        height: 400px;
    }

    @media screen and (min-width: 768px) {
        .article__picture {
            display: flex;
            align-items: center;
            overflow: hidden;
            height: 750px;
        }
    }

    .picture {
        width: 100%;
        height: auto;
    }

    .article__caption {
        padding-left: 20px;
        padding-top: 8px;
        font-weight: 400;
    }

    .article__text {
        padding: 70px 20px;
        font-size: 20px;
        font-weight: 400;
    }

    @media screen and (min-width: 768px) {
        .article__text {
            padding: 100px 250px;
            font-size: 30px;
            font-weight: 400;
        }
    }

    .text {
        padding-bottom: 20px;
    }
</style>