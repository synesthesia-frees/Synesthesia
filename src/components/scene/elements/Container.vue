<template>
	<div class="elements-container">
		<div class="list-container">
			<ElementsList />
		</div>
		<div class="actions-container">
			<MyButton
				title="Add element"
				@onClick="() => console.log('clicked')"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import ElementsList from './List.vue'

export default Vue.extend({
	name: 'SceneElementsContainer',
	components: {
		ElementsList
	}
})
</script>

<style lang="scss" scoped>
.elements-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 3%;
}

.list-container {
	flex: 1;
	display: flex;
}

.actions-container {
	display: flex;
	flex-direction: row-reverse;
	align-items: stretch;
}
</style>
