import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import JsonEditor from '@/components/JsonEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/jsoneditor',
      name: 'JsonEditor',
      component: JsonEditor
    }
  ]
})
