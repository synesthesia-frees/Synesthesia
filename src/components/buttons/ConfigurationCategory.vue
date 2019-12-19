<template>
	<a @click="onClick" class="button-size-wrapper">
		<div class="button-aspect-ratio-wrapper">
			<div class="button-config-category">
				<h2>
					{{ title }}
				</h2>
			</div>
		</div>
	</a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'ButtonConfigurationCategory',
	props: {
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: false,
			default: 'Lorem ipsum...'
		},
		onClick: {
			type: Function,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>
.button-size-wrapper {
	width: 33%;
	cursor: pointer;
	>.button-aspect-ratio-wrapper {
		width: 100%;
		padding-top: 56.25%;
		position: relative;

		>.button-config-category {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: $background-lighter;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: linear .2s;
			border-radius: 10px;

			> h2 {
				color: $text
			}
		}

		.button-config-category:hover {
			opacity: 0.8
		}
}

}


</style>
