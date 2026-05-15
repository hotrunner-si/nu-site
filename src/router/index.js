import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import RacesView from '../views/RacesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/projects',
      component: ProjectsView,
    },
    {
      path: '/races',
      component: RacesView,
    },
  ],
})

export default router