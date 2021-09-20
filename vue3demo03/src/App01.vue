<template>
  <h1 @click="changeMsg">{{ msg}}</h1>
  <input type="text" v-model="msg">
</template>

<script>
// 命令式
// document.querySelector("").innerHTML="你好";

// 声明式
export default {
  name: 'App',
  data(){
    return {
      msg:"hello world"
    }
  },
  methods:{
    changeMsg(){
      this.msg="靓装眉沁绿"
    }
  }
}
</script>
