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
		bottom: 0;
		padding: var(--spacing-small);
	}

	.subscribe {
		display: grid;
		grid-column: 1 / span 12;
		grid-row: 1;
		grid-template-columns: inherit;
		flex-direction: row;
		align-items: center;
		height: 62px;
		width: 100%;
		font-family: var(--font-family);
		font-weight: var(--font-weight-body);
		font-size: var(--font-size-body);

		background: var(--secondary-color);
		cursor: pointer;
		border-radius: 10px;
	}

	.subscribe__text {
		overflow: hidden;
		width: 100%;
		grid-column: 3 / span 8;
		grid-row: 1;
		text-align: center;
	}

	.subscribe:hover {
		background: var(--highlight-color);
	}

	.subscribe__close {
		padding-left: var(--spacing-medium);
		grid-column: 12 / span 1;
		grid-row: 1;
	}

</style>