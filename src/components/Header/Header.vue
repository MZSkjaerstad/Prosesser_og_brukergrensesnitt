<template>
	<header class="header">
		<Logo />
		<SearchBar />
		<div class="header__buttons">
		<SearchButton />
		<MenuButton />
		</div>
	</header>
</template>

<script>

import Logo from "./Logo.vue"
import SearchButton from "./SearchButton.vue"
import MenuButton from "./MenuButton.vue"
import SearchBar from './SearchBar.vue'

export default {
   components: {
		Logo,
		SearchButton,
		MenuButton,
		SearchBar
   }
}
</script>

<style>
	.header {
		width: 100%;
		height: 4rem;
		padding: 0 2%;
		background: inherit;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header__buttons {
		width: 10rem;
		display: flex;
		justify-content: space-between;
		padding: 0 0 0 5rem;
	}
</style>