<template>
<!-- 计算属性 -->
  <h1  class="d1">{{msg.split('').reverse().join('')}}</h1>
  <h1  class="d1">{{reverseMsg}}</h1>


 

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
  // 用到的方法
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