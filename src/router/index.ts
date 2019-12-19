import Vue from 'vue'
import VueRouter from 'vue-router'

import LiveLayout from '@/views/live/Layout.vue';
import LiveHome from '@/views/live/Live.vue'
import LiveMapping from '@/views/live/Mapping.vue';
import LiveLasers from '@/views/live/Lasers.vue'
import LiveLights from '@/views/live/Lights.vue'
import Setup from '@/views/Setup.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/setup',
    name: 'setup',
    component: Setup
  },
  {
    path: '/live',
    component: LiveLayout,
    children: [
      {
        path: '/',
        name: 'live',
        component: LiveHome
      },
      {
        path: '/mapping',
        name: 'live_mapping',
        component: LiveMapping
      },
      {
        path: '/lasers',
        name: 'live_lasers',
        component: LiveLasers
      },
      {
        path: '/lights',
        name: 'live_lights',
        component: LiveLights
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
