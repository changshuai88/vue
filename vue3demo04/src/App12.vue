<template>
  <h1 v-if="user=='超级vip'">欢迎有钱人</h1>
  <h1 v-else-if="user=='vip' ">欢迎会员登陆</h1>
  <h1 v-else>充值会让你更强大</h1>
  <!-- 设置切换显示 浪费资源，在结构中不存在-->
  <button @click="toggloUser">切换</button>
  <br>

<!-- 设置切换显示 节省资源，在结构中还存在-->
  <h1 v-show="isShow">切换显示内容</h1>
  <button @click="toggloShow">切换show</button>
</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      user:'超级vip',
      isShow:true
      
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