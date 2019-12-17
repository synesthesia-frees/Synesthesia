<template>
	<div ref="container" class="canvas-resizable">
		<canvas class="canvas"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'CanvasResizable',
	props: {
		mutable_x: {
			type: Boolean,
			default: true,
			required: false
		},
		mutable_y: {
			type: Boolean,
			default: true,
			required: false
		}
	},
	data () {
		return {
			drag_initial_width: 0,
			drag_initial_height: 0,
			drag_last_x: 0,
			drag_last_y: 0
		}
	},
	mounted () {
		(this.$refs.container as Element).addEventListener('mousedown', (e) => {
			let mouseEvent = (e as MouseEvent)
			this.drag_last_x = mouseEvent.x
			this.drag_last_y = mouseEvent.y
			document.addEventListener('mousemove', this.onResize, false)
		}, false)
		document.addEventListener('mouseup', () => {
			document.removeEventListener('mousemove', this.onResize)
		})
	},
	methods: {
		onResize (event: MouseEvent) {
			let x = event.x
			let y = event.y
			const tmp_x = this.drag_last_x - x
			const tmp_y = this.drag_last_y - y

			this.drag_last_x = x
			this.drag_last_y = y

			let container = this.$refs.container as HTMLElement

			let computedStyle = getComputedStyle(container, '')
			if (this.drag_initial_width == 0 && this.drag_initial_height == 0) {
				this.drag_initial_width = parseInt(computedStyle.width as string)
				this.drag_initial_height = parseInt(computedStyle.height as string)
			}
			if (this.mutable_x) {
				let tmp = parseInt(computedStyle.width as string) - tmp_x
				if (tmp > this.drag_initial_width)
					tmp = this.drag_initial_width
				container.style.width = tmp + 'px'
			}
			if (this.mutable_y) {
				let tmp = parseInt(computedStyle.height as string) - tmp_y
				if (tmp > this.drag_initial_height)
					tmp = this.drag_initial_height
				container.style.height = tmp + 'px'
			}
		}
	}
})
</script>

<style lang="scss" scoped>
.canvas-resizable {
	flex: 1;
	border: solid 1px $primary
}

.canvas {
}
</style>
