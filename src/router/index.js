import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/ViewHome.vue'),
      meta: { noAuth: true }
    },
    {
      path: '/login',
      component: () => import('@/views/ViewLogin.vue'),
      meta: { noAuth: true }
    },
    {
      path: '/overview',
      component: () => import('@/views/ViewOverview.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // noAuth as it reduces boilerplate and sets default to guarded routes
  if(to.meta.noAuth && to.meta.noAuth === true) {
    next()
    return
  }
  // If users are logged in they can see all pages
  // if not they are redirected to login
  if (store.state.user) {
    next()
  } else {
    next('/login')
  }
})

export default router
