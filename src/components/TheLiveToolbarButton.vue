<template>
	<a @click="callback" :class="`toolbar-button ${active ? 'active' : ''}`">
		<p>{{ title }}</p>
	</a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'ToolbarButton',
	props: {
		title: {
			type: String,
			required: true
		},
		callback: {
			type: Function,
			required: true
		},
		active: {
			type: Boolean,
			required: false,
			default: false
		}
	}
})
</script>

<style lang="scss" scoped>
.toolbar-button {
	background-color: $background-lighter;
	color: $text;
	cursor: pointer;
	padding: 0 5%;
	transition: .2s linear;
	text-align: center;
	white-space: nowrap;
}

.active {
	color: $primary
}

.toolbar-button:hover {
	background-color: $background
}
</style>
