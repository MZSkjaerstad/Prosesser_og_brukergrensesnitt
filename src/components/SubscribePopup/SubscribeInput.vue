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
		width: 100%;
	}

	.input-container__input {
		border: none;
		outline: none;
		background: inherit;
		border-bottom: 1px solid black;
		height: 100%;
		font-size: var(--font-size-body);
	}

	.input-container__button {
		background: var(--highlight-color);
		border: 0;
		cursor: pointer;
		outline: none;
		user-select: none;
		border-radius: 10px;
		font-size: var(--font-size-body);
		color: var(--primary-color);
		margin: 0 0 0 0.3em;
		padding: 1px 3%;
	}

   @media only screen and (max-device-width : 767px) and (-webkit-min-device-pixel-ratio : 2) {
		.input-container__input {
			width: 60%;
		}
	}


   @media only screen and (min-device-width : 768px) and (max-device-width : 1000px) {

	}


   @media only screen  and (min-device-width : 1001px) and (max-device-width : 1200px) {

   }

</style>