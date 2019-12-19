<template>
	<div class="toolbar">
		<h3 class="unselectable">Synesthesia</h3>
		<div style="flex: 1"></div>
		<TheToolbarButton v-if="category === 'live'" title="Configure" :onClick="onGoToSetup"/>
		<TheToolbarButton v-else title="Live" :onClick="onGoToLive"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheToolbarButton from './TheToolbarButton.vue'
import { CATEGORY_CONFIG, CATEGORY_LIVE } from '@/router'

export default Vue.extend({
	name: 'TheToolbar',
	components: {
		TheToolbarButton
	},
	computed: {
		category () {
			return this.$route.meta.category
		}
	},
	methods: {
		onGoToSetup () {
			this.$router.push({
				name: 'config'
			})
		},
		onGoToLive () {
			this.$router.push({
				name: 'live'
			})
		}
	}
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

h3, h4 {
	color: $text
}
</style>
