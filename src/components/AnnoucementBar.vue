<template>
	<div class='announcement-bar' @mouseenter='announcementBarAnimationToggle' @mouseleave='announcementBarAnimationToggle'>
		<h3 class='announcement-bar__message' :class='{pause: !this.announcementBar.playing}'>{{ announcementBar.message }}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			announcementBar: {
				message: 'OUT NOW! Issue #123 “Dialogues on Recursive Colonialisms, Speculative Computation, and the Techno-social',
				playing: true,
			}
		}
	},
	methods: {
		announcementBarAnimationToggle() {
			this.announcementBar.playing = !this.announcementBar.playing
		},
	}
}
</script>

<style>
	/* 1.1 Base */
	.announcement-bar {
		display: flex;
		align-items: center;
		width: 100%;
		height: 3rem;
		background: #ADFF00;
		overflow: hidden;
		white-space: nowrap;
	}

	.announcement-bar__message {
		font-family: 'JetBrainsMono', 'Arial Narrow', Arial, sans-serif;
		font-weight: 400;
		font-size: var(--font-size);
		animation: scroll 20s linear infinite;
		padding-left: 100%;
	}

	.pause {
		animation-play-state: paused;
	}


	@keyframes scroll {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(-100%, 0);
		}
	}
</style>