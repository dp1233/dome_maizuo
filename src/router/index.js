import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmRouter from './routes/films'
import CinemasRouter from './routes/cinemas'
import CenterRouter from './routes/center'
import City from '@/views/City/index'
import store from '@/store/index'
Vue.use(VueRouter)

const routes = [
  ...FilmRouter,
  CinemasRouter,
  ...CenterRouter,
  {
    path: '/',
    redirect:'/films/nowPlaying'
  },
  {
    path: '/city',
    component:City
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let str = ['/balence']
  let jwt = store.state.global._token
  if (jwt) {
    next()
  } else {
    if (str.includes(to.path)) {
      router.push({
        path: '/login',
        query:{callback:to.path}
      })
    } else {
      next()
    }
  }
})

export default router
