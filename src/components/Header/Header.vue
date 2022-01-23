<template>
	<header class="header">
		<Logo />

		<Navigation />

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
import Navigation from './Navigation.vue'

export default {
   components: {
		Logo,
		SearchButton,
		MenuButton,
		SearchBar,
		Navigation
   }
}
</script>

<style>
	.header {
		width: 100%;
		height: auto;
		padding: 1.5% 2%;
		background: inherit;
		display: flex;
		
	}

	.header__buttons {
		width: 10rem;
		display: flex;
		justify-content: space-between;
		padding: 0 0 0 5rem;
	}
</style>