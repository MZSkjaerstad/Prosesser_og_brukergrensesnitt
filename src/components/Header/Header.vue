<template>
	<header class="header">
		<Logo class="header__logo" />

		<SearchBar :class="`header__search header__search-hidden--${hideSearch}`"/>

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
			if (this.hideNav === false) {
				this.hideNav = !this.hideNav
				this.hideSearch = !this.hideSearch
			} else {
		   	this.hideSearch = !this.hideSearch
			}
	   },

	   toggleNav() {
		   if (this.hideSearch === false) {
				this.hideSearch = !this.hideSearch
				this.hideNav = !this.hideNav
			} else {
		   	this.hideNav = !this.hideNav
			}
	   },
   },
}
</script>

<style>
	.header {
		width: 100%;
		height: 64px;
		background: inherit;
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
	}

	.header__logo {
		margin: auto var(--spacing-medium);
		z-index: 16;
	}

	.header__buttons {
		width: 100px;
		display: flex;
		justify-content: space-between;
		z-index: 16;
		margin: auto var(--spacing-medium);
	}

	.header__nav {
		position: absolute;
		z-index: 14;
	}

	.header__search {
		position: absolute;
		z-index: 14;
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
			position: absolute;
			padding-top: 50px;
			text-align: center;
			z-index: 14;
		}
	}
</style>