<template>
	<button class="search">
		<img class="search__image" src="./../../public/assets/images/search.svg" alt="">
	</button>
</template>

<script>

export default {
   components: {

   }
}
</script>

<style>
	.search {
		height: 2rem;
		background: var(--background);
		border: 0;
		cursor: pointer;
		outline: none;
	}

	.search__image  {
		height: 100%;
		width: auto;
	}
</style>