<template>
	<div class="logo">
		<router-link :to="{name:'home'}"> <img class="logo__image" src="./../../../public/assets/images/in(dex).svg" alt=""> </router-link>
	</div>
</template>

<script>

export default {
   components: {

   }
}
</script>

<style>
	.logo {
		height: 30px;
		cursor: pointer;
	}

	.logo__image  {
		height: 100%;
		width: auto;
	}
</style>