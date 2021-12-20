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
  const loggedIn = store.state.user
  console.log(loggedIn)
  const noAuthAndLoggedOut = to.meta.noAuth && to.meta.noAuth === true && !loggedIn
  if(loggedIn || noAuthAndLoggedOut) {
    console.log('loggedIn or no authandloggedout')
    next()
  } else {
    console.log('auth and logged out')
    next('/login')
  }
})

export default router
