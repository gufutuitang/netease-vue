import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import Recommend from '../views/Recommend.vue'
// import Singer from '../views/Singer.vue'
// import Rank from '../views/Rank.vue'
// import Search from '../views/Search.vue'
//实现Vue的按需加载
const Singer =(resolve) => {
  import('../views/Singer').then((module) => {
    resolve(module)
  })
}
const Rank =(resolve) => {
  import('../views/Rank').then((module) => {
    resolve(module)
  })
}
const Search =(resolve) => {
  import('../views/Search').then((module) => {
    resolve(module)
  })
}
const Recommend =(resolve) => {
  import('../views/Recommend').then((module) => {
    resolve(module)
  })
}
const Detial = (resolve) => {
  import('../views/Detail').then((module) => {
    resolve(module)
  })
}

Vue.use(VueRouter)

const routes = [
    {
    path: '/recommend',
    component: Recommend,
      
    children:[
      {path:`detial/:id/`,component:Detial}
    ],
  },

    {
    path: '/singer',
    component: Singer
  },{
    path: '/rank',
    component: Rank
  },{
    path: '/search',
    component: Search
  },{
    path:'/',redirect :'/recommend'
  }
]

const router = new VueRouter({
  routes
})


export default router
