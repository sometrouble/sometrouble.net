import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'Top',
          component: Top
        }
      ]
    }
  ]
})
