import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'

/**
 * Represents the instance config
 */
@Module
export default class Config extends VuexModule {
	loaded = true
}
