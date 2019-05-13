import Vue from 'vue'
import Router from 'vue-router'
import ScanPrint from '@/components/ScanPrint'
import ScanPrintMain from '@/components/ScanPrintMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScanPrint',
      component: ScanPrint,
      children: [
        {
          path: '',
          name: 'ScanPrintMain',
          component: ScanPrintMain
        }
      ]
    }
  ]
})
