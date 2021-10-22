<template>
<!-- style -->
<!-- 第一种写法放置字符串 -->
<h1 :style="msg">hello</h1>
<!-- 第二种写法，放置对象 -->
<h1 :style="{background:'purple'}">hello2</h1>
<button @click="toggleActive">切换active</button>
<!-- 第三种写法，放置数组 -->
<h1 :style="styleObj">hello3</h1>
<!-- 第四种写法，数组和对象的结合 数组种可以是字符串也可以是变量-->
<h1 :style="[styleObj,{width:'500px'}]">hello4</h1>


</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      msg:'background:yellow',
      styleObj:{
        // background:'pink',
        border:"1px solid blue",
        // 若是属性是由-连接的属性名，需要加引号
        // 'background-color':'orange'
        // 也可也采用驼峰命名法
        backgroundColor:'gold'
      }
    }
  },
  methods:{
    toggleActive:function(){
      this.styleObj.backgroundColor='green'
    }
  }
  
  
 
}
</script>

<style >
.active{
  background: gold;
}
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