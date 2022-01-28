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
		width: 100%;
		background: var(--secondary-color);
		display: flex;
		justify-content: center;
	}

	#search {
		font: var(--font-family);
		background: var(--secondary-color);
		margin: 15px;
		width: 40%;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 1px solid black;
		outline: none;
	}
</style>