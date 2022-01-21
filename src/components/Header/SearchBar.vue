<template>
	<div class="search-bar">
		<input id="search" placeholder="search for articles, books, etc." type="text">
	</div>
</template>

<script>

import Logo from "./Logo.vue"
import SearchButton from "./SearchButton.vue"
import MenuButton from "./MenuButton.vue"

export default {
   components: {
		Logo,
		SearchButton,
		MenuButton
   }
}
</script>

<style>
	.search-bar {
		border-bottom: 1px solid black;
	}

	#search {
		font: var(--font-family);
		width: 30rem;
		border: none;
		outline: none;
	}
</style>