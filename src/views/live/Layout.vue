<template>
	<div class="live">
		<div class="header-container">
		</div>
		<div class="content-container">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'LiveView',
	components: {
	}
})
</script>

<style lang="scss" scoped>
.live {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.header-container {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}

.content-container {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  padding: 0 3%
}
</style>
