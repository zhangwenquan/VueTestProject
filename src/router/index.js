import Vue from 'vue'
import Router from 'vue-router'
import QueryPrint from '@/components/QueryPrint'
import QueryPrintMain from '@/components/QueryPrintMain'
import WeightAndPrint from '@/components/WeightAndPrint'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'QueryPrint',
          component: QueryPrint,
          children: [
            {
              path: '',
              name: 'QueryPrintMain',
              component: QueryPrintMain
            }
          ]
        },
        {
          path: 'WeightAndPrint',
          name: 'WeightAndPrint',
          component: WeightAndPrint
        }
      ]
    }
  ]
})
