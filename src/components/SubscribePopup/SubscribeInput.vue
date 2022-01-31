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
		display: flex;
		justify-content: center;
		align-items: center;
		
	}

	.input-container__input {
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
		background: var(--highlight-color);
		border: 0;
		cursor: pointer;
		outline: none;
		user-select: none;
		border-radius: 10px;
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);
		margin: 0 0 0 0.3em;
		padding: 1px 6%;
	}

</style>