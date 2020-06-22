import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/rank',
    name: 'rank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('views/rank/rank.vue')
  },
  {
    path: '/singer',
    component: () => import('views/singer/singer.vue')
  },
  {
    path: '/search',
    component: () => import('views/search/search.vue')
  },
  {
    path: '/recommend',
    component: () => import('views/recommend/recommend.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
