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
        </div>
    </main>
</template>

<script>
    export default {
		 props: [
			 'id'
		 ],
        data() {
            return {
            
            }
        },
        computed: {
            article: function(){
                const article = this.$store.getters.getArticleById(this.id)

                return article
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