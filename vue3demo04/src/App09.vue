<template>
<!-- 计算属性 -->
  <h1  class="d1">{{msg.split('').reverse().join('')}}</h1>
  <h1  class="d1">{{reverseMsg}}</h1>
<input type="text" v-model="msg">
<h1>{{msg}}</h1>

 

</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      msg:'helloworld'
    }
  },
  // 计算属性
  computed:{
    reverseMsg(){
      // 这里调用msg变量需要加this
      return this.msg.split('').reverse().join('');
    }
  },
  // 监听值的变化
 watch:{
   msg:function(newValue,oldValue){
     console.log("newValue",newValue);
   console.log("oldValue",oldValue);
     if(newValue.length<10){
       alert("输入的值太少了")
     }
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