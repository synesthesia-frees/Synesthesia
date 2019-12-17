<template>
	<div class="mapping">
		<h2>Mapping / Laser</h2>
		<div class="content-container">
			<CanvasResizable />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import CanvasResizable from '../CanvasResizable.vue'

export default Vue.extend({
	name: 'PreviewMappingContainer',
	components: {
		CanvasResizable
	}
})
</script>

<style lang="scss" scoped>
.mapping {
	flex: 1;
	text-align: center;
	color: $text;
	display: flex;
	flex-direction: column;
	align-items: stretch;
}

.content-container {
	padding: 10px 5%
}
</style>
