<template>
	<div class="setup-home">

		<!-- Temporary file loader -->
		<input type="file" ref="file" accept=".json" style="display: none">
		<MyButton title="Load config from file" :onClick="onLoadConfigFromFile"/>

		<div style="width: 50px"></div>
		<MyButton title="Start new project" :onClick="onStartNewProject"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'SetupHomeView',
	methods: {
		onLoadConfigFromFile () {
			const inputFile = (this.$refs.file as HTMLInputElement)
			inputFile.click()
			inputFile.onchange = () => {
				if ((inputFile.files as FileList).length > 0) {
					let file = (inputFile.files as FileList)[0]
					let fileReader = new FileReader()
					fileReader.readAsText(file, 'utf-8')
					fileReader.onload = (e) => {
						this.$store.commit('config/loadProjectSettings', JSON.parse((e.target as FileReader).result as string))
					}
				}
			}
		},
		onStartNewProject () {
			this.$router.push({
				name: 'setup_new'
			})
		}
	}
})
</script>

<style lang="scss" scoped>
.setup-home {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
