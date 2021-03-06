import Vue from 'vue'
import Router from 'vue-router'
import { LoadingBar } from 'iview'

import HomePage from '@/components/HomePage'

import store from '../../../store'
import UrlConstant from '../../../api/constant'

Vue.use(Router)

const routes =
  [{
    path: '/',
    component: HomePage
  }, {
    path: '/article',
    component: () => import('@/components/article/preview/ArticlePreview')
  }, {
    path: '/question',
    component: () => import('@/components/question/preview/QuestionPreview')
  }, {
    path: '/video',
    component: () => import('@/components/video/preview/VideoPreview')
  }, {
    path: '/share',
    component: () => import('@/components/share/preview/SharePreview')
  }, {
    path: '/about',
    component: () => import('@/components/about/AboutPreview')
  }, {
    path: '/article/:articleId',
    component: () => import('@/components/article/Article')
  }, {
    path: '/question/:questionId',
    component: () => import('@/components/question/Question')
  }, {
    path: '/video/:videoId',
    component: () => import('@/components/video/Video')
  }, {
    path: '*',
    redirect: '/'
  }]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  LoadingBar.start()

  Vue.http.get(UrlConstant.loginStateUrl).then(response => {
    if (response.body.success) {
      store.commit('setToken', true)
    } else {
      store.commit('logout')
    }
    next()
  })
})

router.afterEach(route => {
  LoadingBar.finish()
})

export default router
