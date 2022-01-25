<template>
	<header class="header">
		<Logo />

		<Navigation :class="`header__nav header__nav-hidden--${hideNav}`"/>

		<div class="header__buttons">
			<SearchButton @click="toggleSearch()"/>
			<MenuButton @click="toggleNav()" />
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
   },

   data() {
	   return {
		   hideNav: true,
		   hideSearch: true,
	   }
   },

   methods: {
	   toggleSearch() {
		   this.hideSearch = !this.hideSearch
	   },

	   toggleNav() {
		   this.hideNav = !this.hideNav
	   },
   },
}
</script>

<style>
	.header {
		width: 100%;
		height: auto;
		padding: 20px;
		background: inherit;
		display: flex;
		justify-content: space-between;
	}

	.header__buttons {
		width: 100px;
		display: flex;
		justify-content: space-between;
	}

	/* Toggle functions */
	

	.header__nav-hidden--true {
		display: none;
	}

	.header__nav-hidden--false {
		display: flex;
	}

	.header__search-hidden--true {
		display: none;
	}

	.header__search-hidden--false {
		display: flex;
	}

	@media  screen and (max-width: 1100px) {

		.header__nav {
			width: 100%;
			transform: translateX(-20px);
			position: absolute;
			margin-top: 50px;
			z-index: 16;
		}
	}
</style>