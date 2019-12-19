<template>
	<div class="toolbar">
		<h3>Synesthesia</h3>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'TheToolbar'
})
</script>

<style lang="scss" scoped>
.toolbar {
	background-color: $background;
	padding: 0 3%;
	display: flex;
	flex-direction: row;
	align-items: stretch;
}

h3 {
	color: $text
}
</style>
