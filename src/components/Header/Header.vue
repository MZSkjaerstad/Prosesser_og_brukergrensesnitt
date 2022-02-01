<template>
	<header class="header">
		<Logo :class="`header__logo header__logo-hidden--${hideLogo}`" />

		<SearchBar :class="`header__search header__search-hidden--${hideSearch}`"/>

		<Navigation :class="`header__nav header__nav-hidden--${hideNav}`"/>

		<div class="header__buttons">
			<SearchButton @click="toggleSearch()"/>
			<MenuButton class="header__menu-button" @click="toggleNav()" />
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
			hideLogo: false,
	   }
   },

   methods: {
	   toggleSearch() {
			if (this.hideNav === false) {
				this.hideNav = !this.hideNav
				this.hideSearch = !this.hideSearch
				this.hideLogo = !this.hideLogo
			} else {
		   	this.hideSearch = !this.hideSearch
				this.hideLogo = !this.hideLogo
			}
	   },

	   toggleNav() {
		   if (this.hideSearch === false) {
				this.hideSearch = !this.hideSearch
				this.hideNav = !this.hideNav
				this.hideLogo = !this.hideLogo
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
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		top: 0;
	}

	.header__logo {
		grid-column: 1 / span 2;
		margin: auto var(--spacing-small);
		z-index: 16;
	}

	.header__buttons {
		grid-column: 12 / span 1;
		display: flex;
		justify-content: space-between;
		z-index: 16;
		margin: auto var(--spacing-small);
	}

	.header__nav {
		position: absolute;
		z-index: 14;
	}

	.header__search {
		position: absolute;
		z-index: 14;
	}

	.header__menu-button {
		margin-left: var(--spacing-small);
	}

	/* Toggle functions */

	.header__nav-hidden--true {
		display: none;
	}

	.header__nav-hidden--false {
		display: grid;
	}

	.header__search-hidden--true {
		display: none;
	}

	.header__search-hidden--false {
		display: grid;
	}

	@media  screen and (max-width: 900px) {

		.header__nav {
			width: 100%;
			padding: var(--spacing-large) 0 var(--spacing-medium) 0;
			text-align: center;
			z-index: 14;
		}

		.header__logo-hidden--true {
			display: none;
		}

		.header__logo-hidden--false {
			display: grid;
		}
	}
</style>