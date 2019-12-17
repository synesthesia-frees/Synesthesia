<template>
	<div class="stream">
		<div style="flex: 1"></div>
		<VolumeStereo />
		<div style="flex: 1"></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VolumeStereo from '../audio/VolumeStereo.vue'

export default Vue.extend({
	name: 'StreamContainer',
	components: {
		VolumeStereo
	}
})
</script>

<style lang="scss" scoped>
.stream {
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: stretch;
}
</style>
