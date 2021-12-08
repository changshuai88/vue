import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/home/Home.vue');
const About = () => import('../views/about/About.vue');
const News = () => import('../views/news/News.vue');
const Goods = () => import('../views/goods/Goods.vue');
const Contact = () => import('../views/contact/Contact.vue');

const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: 'VOTAI-首页',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'VOTAI-首页',
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
    meta: {
      title: 'VOTAI-关于我们',
    },
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: News,
    meta: {
      title: 'VOTAI-新闻',
    },
  },
  {
    path: '/goods',
    name: 'Goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Goods,
    meta: {
      title: 'VOTAI-配件',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact,
    meta: {
      title: 'VOTAI-联系方式',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title;
})

export default router;
