<template>
<<<<<<< HEAD
  <ol>
    <li v-for="(item,i) in news" :key="i">{{item}}===>{{i}}</li>
  </ol>
=======
<!-- style -->
<!-- 第一种写法放置字符串 -->
<h1 :style="msg">hello</h1>
<!-- 第二种写法，放置对象 可以放多条 -->
<h1 :style="{background:'blue',color:'red'}">hello2</h1>
<!-- 对象的第二种方式 -->
<h1 :style="style1">hello2</h1>

<button @click="toggleActive">切换active</button>
<!-- 第三种写法，放置数组 -->
<h1 :style="arr">hello3</h1>
<!-- 第四种写法，数组和对象的结合 数组种可以是字符串也可以是变量-->
<h1 :style="['abc',{active:true},className]">hello4</h1>


>>>>>>> 3b83f10db48e7118cd2c2117912d184a9a012de8
</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
<<<<<<< HEAD
      news:[
      'v-once指令，使得内容只渲染一次',
      'v-html指令，使得内容插入html代码',
      'v-bind指令，绑定属性的内容'
      ]
=======
      msg:'background:yellow',
      isActive:true,
      arr:['swiper','active'],
      className:'d1',
      style1:{
        background:'gray',
        fontSize:'20px',
        border:'solid 1px #eee',
        // borderRadius:'10px'  如果不想加引号，就要采用驼峰命名法
        'border-radius':'10px'
      }
>>>>>>> 3b83f10db48e7118cd2c2117912d184a9a012de8
    }
  },
  methods:{
    toggloUser:function(){
      this.user='普通用户'
    },
    toggloShow:function(){
      this.isShow =!this.isShow;
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