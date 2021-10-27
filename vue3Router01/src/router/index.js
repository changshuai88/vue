import {createRouter,createWebHashHistory, useRoute} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import Article from '../components/Article.vue'
import Films from '../components/Films.vue'
import User from '../components/User.vue'
import Hengban from '../components/Hengban.vue'
import Shuban from '../components/Shuban.vue'
import Page from '../components/Page.vue'
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
    component:Page
  }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router