import { Vector3, AmbientLight, PerspectiveCamera, OrthographicCamera, ShapeGeometry } from 'three'

export type Scene = {
	cameras: PerspectiveCamera
	objects: Array<Elements.ElementUnion>
}

declare namespace Elements {
	export type ElementUnion = Light | Shape

	export interface Element {
		name: String,
		saved: Boolean
	}
	export interface Light extends Element {
		position: Vector3
	}

	export interface Shape extends Element {
		shape: ShapeGeometry
	}
}
