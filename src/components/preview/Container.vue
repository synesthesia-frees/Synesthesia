<template>
	<div class="preview">
		<h2>Preview</h2>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'PreviewContainer'
})
</script>

<style lang="scss" scoped>
.preview {
	flex: 1;
	text-align: center;
	color: $text
}

</style>
