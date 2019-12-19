<template>
	<div class="loading">
		<h2>Chargement...</h2>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'LoadingView',
	mounted () {
		if (!this.$store.state.config.loaded) {
			this.$router.push({
				name: 'setup'
			})
		}
	}
})
</script>

<style lang="scss" scoped>
.loading {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	color: $text;
}
</style>
