<template>
	<div class="scene">
		<div class="top-container">
			<div ref="canvasContainer" class="canvas-container">

			</div>
			<div class="elements-list-container">

			</div>
		</div>
		<div class="bot-container">

		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'ConfigureSceneView',
	components: {
	},
	methods: {
		getCanvasContainer () {
			return this.$refs.canvasContainer
		}
	}
})
</script>

<style lang="scss" scoped>
.scene {
	margin: 0;
	width: 100%;

	>.top-container {
		width: 100%;
		height: 70%;
		display: block;

		>.canvas-container {
			width: 70%;
			float: left;
			height: 100%;
		}

		>.elements-list-container {
			width: 30%;
			float: right;
			height: 100%;
		}
	}

	>.bot-container {
		width: 100%;
		height: 30%;
	}
}
</style>
