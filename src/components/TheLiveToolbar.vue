<template>
	<div class="toolbar">
		<ToolbarButton
			title="Live"
			:callback="onClickLive"
			:active="$route.name === 'live'"
		/>
		<ToolbarButton
			title="Mapping"
			:callback="onClickMapping"
			:active="$route.name === 'live_mapping'"
		/>
		<ToolbarButton
			title="Lasers"
			:callback="onClickLasers"
			:active="$route.name === 'live_lasers'"
		/>
		<ToolbarButton
			title="Lights"
			:callback="onClickLights"
			:active="$route.name === 'live_lights'"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToolbarButton from './TheLiveToolbarButton.vue'

export default Vue.extend({
	name: 'Toolbar',
	components: {
		ToolbarButton
	},
	methods: {
		onClickLive () {
			this.$router.push({ name: 'live' })
		},
		onClickMapping () {
			this.$router.push({ name: 'live_mapping' })
		},
		onClickLasers () {
			this.$router.push({ name: 'live_lasers' })
		},
		onClickLights () {
			this.$router.push({ name: 'live_lights' })
		}
	}
})
</script>

<style lang="scss" scoped>
.toolbar {
	padding: 0 3%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
</style>
