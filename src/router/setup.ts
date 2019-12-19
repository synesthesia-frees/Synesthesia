import { RouteConfig } from 'vue-router'

import SetupLayout from '@/views/setup/Layout.vue'
import SetupHome from '@/views/setup/Home.vue'

export default (category: string) => {
	const routes: RouteConfig = {
		path: '/setup',
		component: SetupLayout,
		children: [
			{
				path: '',
				name: 'setup',
				component: SetupHome,
				meta: {
					category
				}
			}
		]
	}
	return routes
}
