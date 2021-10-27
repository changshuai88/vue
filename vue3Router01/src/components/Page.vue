<template>
    <h1>page  页面</h1> 
    <button @click="goPage">首页</button>
    <button @click="goPageAbout">about页面</button>
    <button @click="goPageNews">News页面</button>
    <button @click="goPageNews1">News页面11</button>
    <button @click="goSearch">goSearch页面</button>



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
        }
    }
}
</script>