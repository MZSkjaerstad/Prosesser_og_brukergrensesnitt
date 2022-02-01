<template>
  <div class="input-container" >
	  <input class="input-container__input" type="text" :placeholder="`${this.subscribeInput.placeholder}`">
	  <button class="input-container__button" @click="submitSubscribe()">subscribe</button>
  </div>
</template>

<script>

export default {
	data() {
		return {
			subscribeInput: {
				placeholder: "enter your e-mail"
			},
		}
	},
	methods: {
		submitSubscribe() {
			this.$parent.subscribed()
			console.log("emitted")
		}
	},

	computed: {
		
	}
}
</script>

<style>
	.input-container {
		width: 100%;
		grid-column: 4 / span 6;
		grid-row: 1;
		display: grid;
		grid-template-columns: inherit;
	}

	.input-container__input {
		grid-column: 1 / span 8;
      grid-row: 1;
		width: 100%;
		border: none;
		outline: none;
		background: inherit;
		border-bottom: 1px solid black;
		height: 100%;
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);
	}

	.input-container__button {
		grid-column: 9 / span 6;
		grid-row: 1;
		background: var(--highlight-color);
		border: 0;
		cursor: pointer;
		outline: none;
		user-select: none;
		border-radius: 10px;
		margin-left: var(--spacing-small);
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);
	}

</style>