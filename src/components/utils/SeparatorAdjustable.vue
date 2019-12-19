<template>
	<div ref="separator" :class="`separator ${orientation}`">
		<div class="inner"></div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export const ORIENTATION_VERTICAL = "vertical";
export const ORIENTATION_HORIZONTAL = "horizontal";

export default Vue.extend({
	name: "SeparatorAdjustable",
	props: {
		orientation: {
			type: String,
			required: false,
			default: ORIENTATION_HORIZONTAL,
			validator(value) {
				return (
					value === ORIENTATION_HORIZONTAL || value === ORIENTATION_VERTICAL
				);
			}
		},
		beforeElement: {
			type: Function,
			required: true
		}
	},
	data() {
		return {
			last: 0
		};
	},
	mounted() {
		(this.$refs.separator as Element).addEventListener(
			"mousedown",
			e => {
				let mouseEvent = e as MouseEvent;
				this.last =
					this.orientation === ORIENTATION_VERTICAL
						? mouseEvent.x
						: mouseEvent.clientY;

				document.addEventListener("mousemove", this.onMouseMove, false);
			},
			false
		);
		document.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", this.onMouseMove);
		});
	},
	methods: {
		onMouseMove(event: MouseEvent) {
			const beforeEl = this.beforeElement() as HTMLElement;
			const last = this.last;

			let pos;
			if (this.orientation === ORIENTATION_VERTICAL) {
				pos = event.x;
			} else {
				pos = event.y;
			}
			let tmp = this.last - pos;

			const computedStyle = getComputedStyle(beforeEl, "");
			if (this.orientation === ORIENTATION_VERTICAL) {
				beforeEl.style.width =
					parseInt(computedStyle.width as string) - tmp + "px";
			} else {
				beforeEl.style.height =
					parseInt(computedStyle.height as string) - tmp + "px";
			}
			this.last = pos;
		}
	}
});
</script>

<style lang="scss" scoped>
.separator {
	height: 0;
	width: 0;
	margin: auto;

	&.horizontal {
    width: 100%;
    height: 10px;
		cursor: row-resize;
		> .inner {
      height: 5px;
			border-bottom: solid 1px $background-lighter;
		}
	}

	&.vertical {
    height: 100%;
    width: 10px;;
		cursor: col-resize;

		> .inner {
      width: 5px;
			height: 100%;;
			border-left: solid 1px $background-lighter;
		}
	}
}
</style>
