<template>
	<div class="scene">
		<div ref="topContainer" class="top-container">
			<div ref="canvasContainer" class="canvas-container">
				<SceneCanvas />
			</div>
			<div class="separator-container">
				<SeparatorAdjustable orientation="vertical" :beforeElement="getCanvasContainer"/>
			</div>
			<div class="elements-list-container">
				<SceneElements />
			</div>
		</div>
		<SeparatorAdjustable :beforeElement="getTopContainer"/>
		<div class="bot-container">

		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import SeparatorAdjustable from '@/components/utils/SeparatorAdjustable.vue'
import SceneCanvas from '@/components/scene/canvas/Container.vue'
import SceneElements from '@/components/scene/elements/Container.vue'

export default Vue.extend({
	name: 'ConfigureSceneView',
	components: {
		SeparatorAdjustable,
		SceneCanvas,
		SceneElements
	},
	methods: {
		getTopContainer () {
			return this.$refs.topContainer
		},
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
		min-height: 60%;
		max-height: 70%;
		display: block;

		>.canvas-container {
			width: 70%;
			max-width: 80%;
			min-width: 70%;
			float: left;
			height: 100%;
		}

		>.separator-container {
			width: 10px;
			float: left;
			height: 100%;
		}

		>.elements-list-container {
			display: flex;
			align-items: stretch;
			height: 100%;
			width: auto;
		}
	}

	>.bot-container {
		display: flex;
		align-items: stretch;
	}
}
</style>
