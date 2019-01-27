import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import Home from '@/components/pages/Home'
import Terms from '@/components/pages/Terms'
import Contact from '@/components/pages/Contact'
import Style from '@/components/pages/Style'

import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '@/assets/scss/main.scss'
import '@/assets/fonts/inter-ui.css'

Vue.use(Router)
// window.$ = require('jquery')

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
      meta: {
        title: 'Terms of use',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/style',
      name: 'Style',
      component: Style,
      
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
