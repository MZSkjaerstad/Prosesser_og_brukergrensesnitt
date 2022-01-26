<template>
    <main>
        <div>
            {{ article.title }}
        </div>

        <div>
            <div>
                hei
            </div>
            
            <div></div>
        </div>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                
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

</style>