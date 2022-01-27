<template>
	<button class="search">
		<svg class="search__svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle class="search__stroke" cx="11.5" cy="11.5" r="10.5" stroke="black" stroke-width="2.5"/>
			<path class="search__stroke" d="M19 19L30 30" stroke="black" stroke-width="2.5"/>
		</svg>
	</button>
</template>

<script>

export default {
   components: {

   }
}
</script>

<style>
	.search {
		height: 30px;
		background: inherit;
		border: 0;
		cursor: pointer;
		outline: none;
	}

	.search:hover .search__svg .search__stroke {
		stroke: var(--highlight-color)
	}

</style>