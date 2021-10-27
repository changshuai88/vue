<template>
    <h1>电影页面{{$route.params.id}}</h1>
</template>

<script>
export default {
    mounted(){
        // $route 为路由的对象可以获取URL中的数据
        console.log(this.$route);
    },
    setup() {
        
    },
}
</script>