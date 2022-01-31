<template>
    <main class="article">
        <div class="article__details">
            <div class="article__author">
                {{ article.author }}
            </div>

            <div class="article__title">
                {{ article.title }}
            </div>
        </div>

        <figure class="article__image-frame">
			<img class="article__image" :src="article.picture"/>
		</figure>

        <div class="article__caption">
            {{ article.caption }}
        </div>

        <div class="article__text">
            <div class="text__section">
                {{ article.body[0] }}
            </div>

            <div class="text__section">
                {{ article.body[1] }}
            </div>

            <div class="text__section">
                {{ article.body[2] }}
            </div>

            <div class="text__section">
                {{ article.body[3] }}
            </div>
        </div>
    </main>
</template>

<script>
    export default {
		props: [
			'id'
		],

        computed: {
            article: function() {
                const article = this.$store.getters.getArticleById(this.id)

                return article
            }
        }
    }
</script>

<style>

    .article {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .article__details {
        grid-column: 2 / span 10;
        grid-row: 1;
    }

    .article__author {
        padding-top: var(--spacing-medium);
        font-size: var(--font-size-body);
        font-weight: 400;
    }

    .article__title {
        padding-bottom: var(--spacing-medium);
        font-size: var(--font-size-large);
        font-weight: 400;
    }

    .article__image-frame {
        grid-column: 1 / span 12;
        grid-row: 2;
        overflow: hidden;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .article__image {
        width: 100%;
        height: auto;
    }

    .article__caption {
        grid-column: 1 / span 12;
        grid-row: 3;
        font-size: var(--font-size-small);
        padding-top: var(--spacing-small);
        font-weight: 400;
        padding-left: var(--spacing-small);
    }

    .article__text {
        grid-column: 3 / span 8;
        grid-row: 4;
        padding: var(--spacing-large) 0 var(--spacing-large) 0;
        font-size: var(--font-size-body);
        font-weight: 400;
    }

    .text__section {
        margin-bottom: var(--spacing-medium);
    }

    @media  screen and (max-width: 900px) {
        .article__details {
            grid-column: 1 / span 12;
            padding: 0 var(--spacing-small);
        }

        .article__image {
            width: auto;
            height: 100%;
        }

        .article__caption {
            grid-column: 1 / span 12;
            padding: var(--spacing-small) var(--spacing-small) 0 var(--spacing-small);
        }

        .article__text {
            grid-column: 1 / span 12;
            padding: var(--spacing-large) var(--spacing-small) var(--spacing-large) var(--spacing-small);
        }
    }
</style>