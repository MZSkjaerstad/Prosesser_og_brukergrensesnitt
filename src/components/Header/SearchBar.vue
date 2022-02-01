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
		display: grid;
		grid-template-columns: repeat(12, 1fr);
	}

	#search {
		grid-column: 4 / span 6;
		font: var(--font-family);
		font-size: var(--font-size-body);
		font-weight: var(--font-weight-body);
		background: var(--secondary-color);
		margin: 15px;
		border: 0;
		border-bottom: 1px solid black;
		outline: none;
	}

	@media  screen and (max-width: 900px) {
		#search {
			grid-column: 1 / span 9;
		}
	}
</style>