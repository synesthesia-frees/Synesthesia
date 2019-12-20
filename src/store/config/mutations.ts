import { MutationTree } from 'vuex'

import { ConfigState } from '@/types/state'
import { Scene } from '@/types/scene'
import { ProjectSettings } from '@/types/projectSettings'

const mutations: MutationTree<ConfigState> = {
	loadProjectSettings (state, projectSettings: ProjectSettings) {
	},

	setScene (state, scene: Scene) {
		state.scene = scene
	}
}

export default mutations
