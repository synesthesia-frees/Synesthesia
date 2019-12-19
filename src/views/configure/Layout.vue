<template>
	<div class="configure">
		<div class="content-container">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'ConfigureLayoutView',
})
</script>

<style lang="scss" scoped>
.configure {
  display: flex;
  flex-flow: column;
	flex: 1;
}

.content-container {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 0 3%;
	display: flex;
}
</style>
