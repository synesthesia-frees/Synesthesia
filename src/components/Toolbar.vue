<template>
	<div class="toolbar">
		<ToolbarButton
			title="Setup project"
			:callback="onClickToSetupProject"
		/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToolbarButton from './ToolbarButton.vue'

export default Vue.extend({
	name: 'Toolbar',
	components: {
		ToolbarButton
	},
	methods: {
		onClickToSetupProject () {
			this.$router.push({ name: 'setup' })
		}
	}
})
</script>

<style lang="scss" scoped>
.toolbar {
	background-color: $background-lighter;
	padding: 0 3%;
	display: flex;
	flex-direction: row;
	align-items: stretch;
}
</style>
