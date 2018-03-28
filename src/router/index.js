import Vue from 'vue'
import Router from 'vue-router'
import JsonEditor from '@/components/JsonEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index'
    }, {
      path: '/jsonEditor',
      name: 'JsonEditor',
      component: JsonEditor
    }
  ]
})
