<template>
    <h1>新闻的内容是：{{ content }}</h1>
    <h1>从login传给父组件，再从父组件传给news子组件的值：{{ msg }}</h1>
</template>
<script>
export default {
    props:['content','msg']
}
</script>