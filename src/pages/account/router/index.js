import Vue from 'vue'
import Router from 'vue-router'

const SignIn = () => import('@/components/account/SignIn')
const SignUp = () => import('@/components/account/SignUp')

Vue.use(Router)

const routes = [{
  path: '/signin',
  component: SignIn
},
{
  path: '/signup',
  component: SignUp
},
{
  path: '*',
  component: SignIn
}
]

const router = new Router({
  routes,
  base: '/account',
  mode: 'history'
})

export default router
