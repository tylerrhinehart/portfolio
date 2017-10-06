import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/Skills',
      name: 'Skills',
      component: Skills
    }, 
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
