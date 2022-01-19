<template>
	<header class="header">
		<Logo />
	</header>
</template>

<script>

import Logo from "./Logo.vue"
export default {
   components: {
		Logo
   }
}
</script>

<style>
	.header {
		width: 100%;
		height: 4rem;
		background: var(--background-color);
	}
</style>