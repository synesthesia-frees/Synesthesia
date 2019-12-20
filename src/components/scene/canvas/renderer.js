import * as THREE from 'three'

export default class Renderer {
	constructor(parent, fov = 75) {
		this.parent = parent
		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(fov, parent.offsetWidth / parent.offsetHeight)
		this.renderer = new THREE.WebGLRenderer()
	}

	setup() {
		this.renderer.setSize(this.parent.offsetWidth, this.parent.offsetHeight)
		this.parent.appendChild(this.renderer.domElement)

		var geometry = new THREE.BoxGeometry(1, 1, 1)
		var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
		this.cube = new THREE.Mesh(geometry, material)
		this.scene.add(this.cube)

		this.camera.position.z = 5;
	}

	render() {
		const _render = () => {
			requestAnimationFrame(_render)
			this.cube.rotation.x += 0.01;
			this.cube.rotation.y += 0.01;
			this.renderer.render(this.scene, this.camera)
		}
		_render()
	}
}
