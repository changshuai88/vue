<template>
<!-- 动态指令 -->
<!-- arrtibuteName 为自定义随机变量名 id为自定义随机变量名 -->
<div v-bind:[arrtibuteName]="id"></div>
<button @click="toggleType">更改选择器名</button>
 

</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      arrtibuteName:"class",
      id:'d1'
    }
  },
  methods:{
    toggleType(){
      this.arrtibuteName='id'
    }
  }
  
}
</script>

<style >
#d1{
  width: 100px;
  height: 100px;
  background: forestgreen;
}
.d1{
  width: 100px;
  height: 100px;
  background: gold;
}
</style>