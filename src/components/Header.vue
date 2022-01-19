<template>
	<header class="header">
		<Logo />
		<SearchButton />
		<MenuButton />
	</header>
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
	.header {
		display: flex;
		width: 100%;
		height: 4rem;
		background: var(--secondary-color);
	}
</style>