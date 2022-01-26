<template>
   <LatestArticles />
	<Books />
   <Slideshow />
</template>

<script>
import LatestArticles from '../components/LatestArticles.vue'
import Slideshow from '../components/Slideshow.vue'
import Books from '../components/Books.vue'

export default {
   components: {
      LatestArticles,
		Books,
      Slideshow,
   }
}
</script>

<style></style>
