import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/ViewHome.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/ViewLogin.vue')
    },
    {
      path: '/overview',
      component: () => import('@/views/ViewOverview.vue')
    }
  ]
})

export default router
