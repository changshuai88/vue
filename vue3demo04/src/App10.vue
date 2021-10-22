<template>
<!-- 类class -->
<!-- 第一种写法放置字符串 -->
<h1 :class="msg">hello</h1>
<!-- 第二种写法，放置对象 -->
<h1 :class="{active:isActive}">hello2</h1>
<button @click="toggleActive">切换active</button>
<!-- 第三种写法，放置数组 -->
<h1 :class="arr">hello3</h1>
<!-- 第四种写法，数组和对象的结合 数组种可以是字符串也可以是变量-->
<h1 :class="['abc',{active:true},className]">hello4</h1>


</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      msg:'helloworld',
      isActive:true,
      arr:['swiper','active'],
      className:'d1'
    }
  },
  methods:{
    toggleActive:function(){
      this.isActive=!this.isActive;
      this.arr.pop()
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