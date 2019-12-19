<template>
	<a @click="onClick" class="toolbar-button">
		<p>
			{{ title }}
		</p>
	</a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'TheToolbarButton',
	props: {
		title: {
			type: String,
			required: true
		},
		onClick: {
			type: Function,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>
.toolbar-button {
	color: $text;
	cursor: pointer;
	padding: 0 5%;
	text-align: center;
	transition: .2s linear;

	&:hover {
		background-color: $background-lighter
	}
}
</style>
