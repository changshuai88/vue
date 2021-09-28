<template>

  <h1>{{msg}}</h1>
  <!-- JavaScript表达式可以在模板中使用 -->
  <h1>{{msg.split("")}}</h1>
  <h1>{{msg.split("").reverse()}}</h1>
  <h1>{{msg.split("").reverse().join("")}}</h1>
  <h1 v-bind:id="msg.split('').reverse().join('')" v-bind:class="id"></h1>
  <!-- 模板中还可以使用三元运算 这里只能放置一个表达式，不能放置多个。只能放置一个简单的表达式-->
  <div>{{color == 'green'?'开心':'不开心'}}</div>

  

  


</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      msg:"hello world",
      id:"",
      color:"green"
    }
  },
  
}
</script>

<style >

</style>