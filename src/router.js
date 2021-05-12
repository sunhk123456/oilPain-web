import Vue from 'vue'
import Router from 'vue-router'
import Mi from './views/mi.vue'
import A2 from './views/a.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mi',
      component: Mi
    },
    {
      path: '/a',
      name: 'a',
      component: A2
    }
  ]
})
