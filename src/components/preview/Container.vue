<template>
	<div class="preview">
		<MappingLasersContainer />
		<div class="separator"></div>
		<LightsContainer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MappingLasersContainer from './MappingLasersContainer.vue'
import LightsContainer from './LightsContainer.vue'

export default Vue.extend({
	name: 'PreviewContainer',
	components: {
		MappingLasersContainer,
		LightsContainer
	}
})
</script>

<style lang="scss" scoped>
.preview {
	flex: 2.4;
	display: flex;
	flex-direction: row;
	align-items: stretch;
}

.separator {
  width: 0;
  height: 95%;
  border: solid 1px $background-lighter
}
</style>
