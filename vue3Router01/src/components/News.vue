<template>
    <h1>新闻页{{$route.params.id}}</h1>
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