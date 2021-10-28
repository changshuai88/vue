import {createRouter,createWebHashHistory, createWebHistory, useRoute} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Article from '../components/Article.vue'
import Films from '../components/Films.vue'
import User from '../components/User.vue'
import Hengban from '../components/Hengban.vue'
import Shuban from '../components/Shuban.vue'
import Page from '../components/Page.vue'
import ShopMain from '../components/ShopMain.vue'
import ShopTop from '../components/ShopTop.vue'

import ShopFooter from '../components/ShopFooter.vue'


import NotFound from '../components/NotFound.vue'
// 1. Define route components.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {
    name:"news",
    path:'/news/:id',
    component:News
  },
  {
    // 路由中正则参数
    path:'/article/:id(\\d+)',
    component:Article
  },
  {
    path:'/films/:id+',
    component:Films
  },
  {
    path:'/:path(.*)',
    component:NotFound
  },
  {
     path:'/user',
     component:User,
     children:[
       {
         path:'hengban',
         component:Hengban
       },
       {
         path:'shuban',
         component:Shuban
       }
     ]
  },
  {
    path:'/page',
    component:Page,
    beforeEnter:(to,from)=>{
      console.log('brforeEach');
    }

  },
  {
    path:'/shop',
    // alias:'/votai',
    alias:['/votai','/angrui'],
    components:{
      default:ShopMain,
      ShopTop:ShopTop,
      ShopFooter:ShopFooter
    }
  },
  {
    path:'/mall',
    // redirect:(to)=>{return {path:'/shop'}}
    redirect:'/shop'
  }



]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: createWebHashHistory(),
  history:createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to,from,next)=>{
  console.log(to);
  console.log(from);
  next(); //有第三个参数，并调用正常跳转，如果没有则不跳转
  // return false; //停止跳转
})

export default router