<template>
	<div class="lights">
		<h2>Lights show</h2>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'PreviewLightsContainer'
})
</script>

<style lang="scss" scoped>
.lights {
	flex: 1;
	text-align: center;
	color: $text
}
</style>
