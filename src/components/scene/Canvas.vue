<template>
	<div ref="canvasContainer" class="canvas-container">
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import Renderer from './renderer.js'

export default Vue.extend({
	name: 'SceneCanvas',
	data () {
		return {
			renderer: null as any
		}
	},
	mounted () {
		this.renderer = new Renderer(this.$refs.canvasContainer)
		this.renderer.setup()
		this.renderer.render()
	},
	computed: {
		getCanvasContainer (): HTMLElement {
			return this.$refs.canvasContainer as HTMLElement
		}
	}
})
</script>

<style lang="scss" scoped>
.canvas-container {
	width: 100%;
	height: 100%;

	> canvas {
		width: 100%;
		height: 100%
	}
}
</style>
