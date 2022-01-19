<template>
	<header class="header">
		<Logo />
		<SearchButton />
	</header>
</template>

<script>

import Logo from "./Logo.vue"
import SearchButton from "./SearchButton.vue"
export default {
   components: {
		Logo,
		SearchButton
   }
}
</script>

<style>
	.header {
		width: 100%;
		height: 4rem;
		background: inherit;
	}
</style>