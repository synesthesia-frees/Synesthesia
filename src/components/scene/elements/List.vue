<template>
	<div class="elements-list">
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'SceneElementsList'
})
</script>

<style lang="scss" scoped>
.elements-list {
	flex: 1;
	display: flex;
	align-items: stretch;
	flex-direction: column;
}
</style>
