<template>
  <h1>{{ name }}</h1>
  <h2>Hello</h2>
</template>

<script>
export default {
	props: [
		"name"
	],
	mounted() {
		const router = this.$router
		console.log(router)
	}
}
</script>

<style>

</style>