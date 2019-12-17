import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import { StereoVolume } from '@/models'

/**
 * Represents the audio at time t
 */
@Module
export default class Stream extends VuexModule {
	/**
	 * General volume
	 */
	volume: StereoVolume = {
		l: 0,
		r: 0
	}
}
