<template>
	<a @click="callback" class="toolbar-button">
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
		enabled: {
			type: Boolean,
			required: false,
			default: true
		}
	}
})
</script>

<style lang="scss" scoped>
.toolbar-button {
	color: $text;
	cursor: pointer;
	padding: 0 5%;
	transition: .2s linear;

}
.toolbar-button:hover {
	background-color: $background
}
</style>
