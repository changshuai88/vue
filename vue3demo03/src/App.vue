<template>
<!-- 双括号语法Mustache -->
  <h1 @click="changeMsg">{{ msg}}</h1>
  <!-- <input type="text" v-model="msg"> -->
  <!-- v-once指令，使得内容只渲染一次 msg的内容不会变化 -->
  <h1 @click="changeMsg" v-once>{{ msg }}</h1>
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
