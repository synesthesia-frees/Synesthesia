import Vue from 'vue'
import VueRouter from 'vue-router'

import LiveLayout from '@/views/live/Layout.vue';
import LiveHome from '@/views/live/Live.vue'
import LiveMapping from '@/views/live/Mapping.vue';
import LiveLasers from '@/views/live/Lasers.vue'
import LiveLights from '@/views/live/Lights.vue'

import ConfigureLayout from '@/views/configure/Layout.vue'
import ConfigureHome from '@/views/configure/Home.vue'
import ConfigureServer from '@/views/configure/Server.vue'

Vue.use(VueRouter)

export const CATEGORY_CONFIG = 'config'
export const CATEGORY_LIVE = 'live'

const routes = [
	{
		path: '/config',
		component: ConfigureLayout,
		children: [
			{
				path: '',
				name: 'config',
				component: ConfigureHome,
				meta: {
					category: CATEGORY_CONFIG
				}
			},
			{
				path: 'server',
				name: 'config_server',
				component: ConfigureServer,
				meta: {
					category: CATEGORY_CONFIG
				}
			}
		]
	},
	{
		path: '/live',
		component: LiveLayout,
		children: [
			{
				path: '/',
				name: 'live',
				component: LiveHome,
				meta: {
					category: CATEGORY_LIVE
				}
			},
			{
				path: 'mapping',
				name: 'live_mapping',
				component: LiveMapping,
				meta: {
					category: CATEGORY_LIVE
				}
			},
			{
				path: 'lasers',
				name: 'live_lasers',
				component: LiveLasers,
				meta: {
					category: CATEGORY_LIVE
				}
			},
			{
				path: 'lights',
				name: 'live_lights',
				component: LiveLights,
				meta: {
					category: CATEGORY_LIVE
				}
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
