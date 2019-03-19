import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import About from '@/components/About'
import Login from '@/components/Login'
import Carlist from '@/components/Carlist'
Vue.use(Router)

export default new Router({
  //页面重定向
  routes: [
    { path: '/',
      redirect:"/home"
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/home',
          component:Home
        },
      ]
    },
    {
      path:'/detail/:id',
      component:Detail,
    },
      {
        path:'/carlist',
        component:Carlist
      },
     {
      path:'/about',
      component:About,
      redirect:'/login',
      children:[
        {
          path:'/login',
          component:Login
        }
      ]
    }
  ]
})
