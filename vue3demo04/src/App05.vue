<template>

  <h1>{{msg}}</h1>
  <!-- v-once指令，使得内容只渲染一次 -->
<h1 @click="changeMsg" v-once>{{msg}}</h1>
<!-- 双大括号是插入字符串 -->
<div>{{content}}</div>
<!-- v-html指令，使得内容插入html代码 -->
<div v-html="content"></div>
<!-- v-bind指令，绑定属性的内容  下面的两种写法一样的。第一种是简写方法为常用方法-->
<div :id="id" :class="id">hello</div>
<div v-bind:id="id" v-bind:class="id">world</div>


</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      msg:"hello world",
      content:"<h1>标题</h1><h2>小标题</h2>",
      id:"d1"
    }
  },
  methods:{
    changeMsg(){
      this.msg="蛋炒饭";
      this.id="d2"
    }
  }
}
</script>

<style >
#d1{
  width: 100px;
  height: 100px;
  background: red;
}
#d2{
  width: 100px;
  height: 100px;
  background: gold;
}
.d1{
  font-size: 15px;
  color: white;
}
.d2{
  font-weight: bolder;
  font-size: 25px;
  color: black;
}
</style>