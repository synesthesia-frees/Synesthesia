import { RouteConfig } from 'vue-router'

import ConfigureLayout from '@/views/configure/Layout.vue'
import ConfigureHome from '@/views/configure/Home.vue'
import ConfigureServer from '@/views/configure/Server.vue'

export default (category: string) => {
	const routes: RouteConfig = {
		path: '/config',
		component: ConfigureLayout,
		children: [
			{
				path: '',
				name: 'config',
				component: ConfigureHome,
				meta: {
					category
				}
			},
			{
				path: 'server',
				name: 'config_server',
				component: ConfigureServer,
				meta: {
					category
				}
			}
		]
	}
	return routes
}
