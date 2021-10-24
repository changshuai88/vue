<template>

  <ol>
    <li v-for="(item,i) in news" :key="i">{{item}}===>{{i}}</li>
  </ol>

</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      news:[
      'v-once指令，使得内容只渲染一次',
      'v-html指令，使得内容插入html代码',
      'v-bind指令，绑定属性的内容'
      ]
      }
}
</script>

<style >

</style>