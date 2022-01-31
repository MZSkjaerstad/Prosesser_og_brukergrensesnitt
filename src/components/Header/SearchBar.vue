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
		height: 64px;
		background: var(--secondary-color);
		display: flex;
		justify-content: center;
		padding-left: var(--spacing-large);
	}

	#search {
		font: var(--font-family);
		font-size: var(--font-size-body);
		font-weight: var(--font-weight-body);
		background: var(--secondary-color);
		margin: 15px;
		width: 40%;
		border: 0;
		border-bottom: 1px solid black;
		outline: none;
	}
</style>