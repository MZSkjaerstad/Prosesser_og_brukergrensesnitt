<template>
  <div class="subscribe" v-if='this.SubscribePopup.visible' @click='showInput()'>
	  <p class="subscribe__text" v-if='!this.SubscribeInput.visible'>Subscribe to the in(dex) newsletter for monthly updates</p>
	  <SubscribeInput v-if='this.SubscribeInput.visible' />
	  <CloseButton class="subscribe__close" @click="closePopup()" />
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
	.subscribe {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: auto;
		width: 95%;
		height: 62px;
		padding: 11px;
		font-size: var(--font-size-body);
		position: sticky;
		bottom: 10px;
		background: var(--secondary-color);
		cursor: pointer;
		z-index: 1;
		border-radius: 10px;
	}

	.subscribe:hover {
		background: var(--highlight-color);
	}

	.subscribe__text {
		font-size: var(--font-size-body);
	}

	.subscribe__close {
		position: absolute;
		right: 0;
	}

</style>