import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MapSiteView from '../views/MapSiteView.vue'
import WebsiteView from '../views/WebsiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/maps',
      name: 'maps',
      component: MapSiteView,
    },
    {
      path: '/websites',
      name: 'websites',
      component: WebsiteView,
    },
    {
      path: '/projects',
      redirect: '/maps',
    },
  ],
})

export default router
