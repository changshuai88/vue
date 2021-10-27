<template>
    <h1>page  页面</h1> 
    <button @click="goPage">首页</button>
    <button @click="goPageAbout">about页面</button>
    <button @click="goPageNews">News页面</button>
    <button @click="goPageNews1">News页面11</button>
    <button @click="goSearch">goSearch页面</button>
    <button @click="replacePage">replace替换页面</button>
    <button @click="$router.go(1)">前进</button>
    <button @click="$router.go(-1)">后退</button>
    <router-link to="/page?abc=123">参数变化，导致路由更新</router-link>

</template>

<script>
export default {
    setup() {
        
    },
    methods:{
        goPage(){
            console.log('跳转到首页');
            console.log(this.$router);
            this.$router.push('/')
        },
        goPageAbout(){
            this.$router.push({path:'/about'})
        },
        goPageNews(){
            this.$router.push({path:'/news/123456'})
        },
        goPageNews1(){
            this.$router.push({name:'news',params:{id:1111456}})
        },
        goSearch(){
            this.$router.push({path:'/',query:{name:'cjs'}})
        },
        replacePage(){
           this.$router.replace({path:'/',query:{search:'cyu'}}) 
        }
    },
    beforeRouteEnter(to, from) {
        console.log('路由进入组件');
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate(to, from) {
      console.log('路由更新');
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, given a route with params `/users/:id`, when we
    // navigate between `/users/1` and `/users/2`, the same `UserDetails` component instance
    // will be reused, and this hook will be called when that happens.
    // Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
  },
  beforeRouteLeave(to, from) {
      console.log('路由离开');
    // called when the route that renders this component is about to
    // be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  },
}
</script>