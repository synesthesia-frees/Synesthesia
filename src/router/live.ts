import { RouteConfig } from 'vue-router'

import LiveLayout from '@/views/live/Layout.vue';
import LiveHome from '@/views/live/Live.vue'
import LiveMapping from '@/views/live/Mapping.vue';
import LiveLasers from '@/views/live/Lasers.vue'
import LiveLights from '@/views/live/Lights.vue'

export default (category: string) => {
	const routes: RouteConfig = {
		path: '/live',
		component: LiveLayout,
		children: [
			{
				path: '/',
				name: 'live',
				component: LiveHome,
				meta: {
					category
				}
			},
			{
				path: 'mapping',
				name: 'live_mapping',
				component: LiveMapping,
				meta: {
					category
				}
			},
			{
				path: 'lasers',
				name: 'live_lasers',
				component: LiveLasers,
				meta: {
					category
				}
			},
			{
				path: 'lights',
				name: 'live_lights',
				component: LiveLights,
				meta: {
					category
				}
			}
		]
	}
	return routes
}
