import { Module } from 'vuex';

import { RootState, ConfigState } from '@/types/state'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state: ConfigState = {
	loaded: false,
	serverUrl: '',
	scene: null
}

const module: Module<ConfigState, RootState> = {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}

export default module
