<template>
	<div class="home">
		<ConfigurationCategory title="Server" :onClick="onGoToConfigServer"/>
		<ConfigurationCategory title="Scene" :onClick="onGoToConfigScene"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ConfigurationCategory from '@/components/buttons/ConfigurationCategory.vue'

export default Vue.extend({
	name: 'ConfigureHomeView',
	components: {
		ConfigurationCategory
	},
	methods: {
		onGoToConfigServer () {
			this.$router.push({
				name: 'config_server'
			})
		},
		onGoToConfigScene () {
			this.$router.push({
				name: 'config_scene'
			})
		}
	}
})
</script>

<style lang="scss" scoped>
.home {
	margin: 0;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
}
</style>
