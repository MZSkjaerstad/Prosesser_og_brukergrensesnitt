<template>
	<button class="menu">
		<svg class="menu__svg" width="44" height="30" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0 1H44" stroke="black" stroke-width="2.5"/>
			<path d="M0 13H44" stroke="black" stroke-width="2.5"/>
			<path d="M0 25H44" stroke="black" stroke-width="2.5"/>
		</svg>
	</button>
</template>

<script>

export default {
   components: {}
}
</script>

<style>
	.menu {
		height: 30px;
		background: inherit;
		border: 0;
		cursor: pointer;
		outline: none;
	}

	.menu:hover .menu__svg path {
		stroke: var(--highlight-color)
	}
</style>