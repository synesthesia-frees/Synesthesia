<template>
	<button
		:class="`button ${mode}`"
		:title="title"
		@click="onClick"
	>{{ title }}</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'MyButton',
	props: {
		title: {
			type: String,
			required: true
		},
		onClick: {
			type: Function,
			required: true
		},
		mode: {
			type: String,
			required: false,
			default: 'filled'
		}
	}
})
</script>

<style lang="scss" scoped>
.button {
	padding: 10px 40px;
	border-style: none;
	color: $primary;
	text-align: center;

	&.filled {
		background-color: $background-lighter;
		border-radius: 5px;
		box-shadow: 0 6px #222;

		&:hover {
			opacity: 0.8;
		}

		&:active {
			opacity: 0.8;
			box-shadow: 0 2px #222;
			transform: translateY(4px)
		}
	}
}
</style>
