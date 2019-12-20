import { Scene } from './scene'

export interface RootState {
	version: string
}

export interface ConfigState {
	loaded: boolean
	serverUrl: string
	scene: Scene | null
}
