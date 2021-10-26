<template>
    <h1>userName:{{userName}}</h1>
    <h1>age :{{age}}</h1>
    <h1>description:{{description}}</h1>
</template>
<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUnmounted} from 'vue'
export default {
    setup(props,content) {
        console.log(props);
        console.log(content);
        const description=ref(props.userName+'是'+props.age+'岁');
        onBeforeMount(()=>{
            console.log('onBeforeMount');
        });
        onBeforeMount(()=>{
            console.log('onBeforeMount');
        });
        return {description};
    },
    props:['userName','age']
}
</script>