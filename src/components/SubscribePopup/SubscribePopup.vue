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
		font-size: var(--font-size-body);
		position: sticky;
		bottom: 10px;
		background: var(--secondary-color);
		cursor: pointer;
		border-radius: 10px;
	}

	.subscribe:hover {
		background: var(--highlight-color);
	}

	.subscribe__text {
		font-size: var(--font-size-body);
	}

	.subscribe__close {
		display: flex;
		justify-self: flex-end;
	}

	@media only screen and (max-device-width : 512px) and (-webkit-min-device-pixel-ratio : 2) {
		.subscribe {
			font-size: 8px;
			
		}

		.subscribe__text {
			font-size: 8px;
		}
	}

		@media only screen and (min-device-width : 513px) and (max-device-width : 826px) and (-webkit-min-device-pixel-ratio : 2) {
		.subscribe {
			font-size: 12px;
		}

		.subscribe__text {
			font-size: 12px;
		}
	}


   @media only screen and (min-device-width : 827px) and (max-device-width : 1000px) {

	}


   @media only screen  and (min-device-width : 1001px) and (max-device-width : 1200px) {

   }

</style>