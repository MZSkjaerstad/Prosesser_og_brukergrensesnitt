<template>
	<div class="grid">
  		<div class="subscribe" v-if='this.SubscribePopup.visible' @click='showInput()'>
	  		<p class="subscribe__text" v-if='!this.SubscribeInput.visible'>Subscribe to the in(dex) newsletter for monthly updates</p>
	  		<SubscribeInput v-if='this.SubscribeInput.visible' />
	  		<CloseButton class="subscribe__close" @click="closePopup()" />
		</div>
	</div>
</template>

<script>
import CloseButton from './CloseButton.vue'
import SubscribeInput from './SubscribeInput.vue'

export default {
	components: {
		CloseButton,
		SubscribeInput
	},
	data() {
		return {
			SubscribePopup: {
				visible: true
			},
			SubscribeInput: {
				visible: false
			}
		}
	},
	methods: {
		closePopup() {
			this.SubscribePopup.visible = !this.SubscribePopup.visible
			console.log("hello")
		},

		showInput() {
			this.SubscribeInput.visible = true
		},

		subscribed() {
			console.log("Subscribed")
			alert("Thank you for subscribing to our email newsletter!")
			this.closePopup()
		}
	}
}
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		z-index: 1;
		position: sticky;
	}

	.subscribe {
		display: flex;
		grid-column: 1 / span 12;
		grid-row: 1;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: auto;
		height: 62px;
		width: 100%;
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);

		bottom: 10px;
		background: var(--secondary-color);
		cursor: pointer;
		border-radius: 10px;
	}

	.subscribe:hover {
		background: var(--highlight-color);
	}

	.subscribe__text {

	}

	.subscribe__close {
		position: absolute;
		right: 0;
	}

</style>