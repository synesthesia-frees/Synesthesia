import { RouteConfig } from 'vue-router'

import SetupLayout from '@/views/setup/Layout.vue'
import SetupHome from '@/views/setup/Home.vue'
import SetupNew from '@/views/setup/New.vue'

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
			},
			{
				path: 'new',
				name: 'setup_new',
				component: SetupNew,
				meta: {
					category
				}
			}
		]
	}
	return routes
}
