<template>

  <h1>{{msg}}</h1>
  <h1>{{msg.split("")}}</h1>
  <h1>{{msg.split("").reverse()}}</h1>
  <h1>{{msg.split("").reverse().join("")}}</h1>
  <h1 v-bind:id="msg.split('').reverse().join('')" v-bind:class="id"></h1>
  

  


</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      msg:"hello world",
      id:""
    }
  },
  
}
</script>

<style >

</style>