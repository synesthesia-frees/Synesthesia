import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Loading from '@/views/Loading.vue';

import routesSetup from './setup'
import routesConfig from './config'
import routesLive from './live'

export const CATEGORY_SETUP = 'setup'
export const CATEGORY_CONFIG = 'config'
export const CATEGORY_LIVE = 'live'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
	{
		path: '/',
		component: Loading,
		meta: {
			category: CATEGORY_SETUP
		}
	}
]

routes.push(routesSetup(CATEGORY_SETUP))
routes.push(routesConfig(CATEGORY_CONFIG))
routes.push(routesLive(CATEGORY_LIVE))

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
