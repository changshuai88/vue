<template>
    <h1>学生</h1>
    <h1>name:{{name}}</h1>
    <h1>className :{{className}}</h1>
</template>
<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUnmounted,inject} from 'vue'
export default {
    setup(props,content) {
        const student=inject('student')
        return {...student};
    },
    props:['userName','age']
}
</script>