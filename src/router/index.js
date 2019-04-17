import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexHeader from '@/components/index_header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'index_header',
          component: indexHeader
        }
      ]
    },

  ]
})
