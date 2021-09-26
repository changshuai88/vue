<template>
<div>
  <h1>{{msg}}</h1>
<h1 @click="changeMsg" v-once>{{msg}}</h1>
<div>{{content}}</div>
<div v-html="content"></div>
</div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      msg:"hello world",
      content:"<h1>标题</h1><h2>小标题</h2>"
    }
  },
  methods:{
    changeMsg(){
      this.msg="蛋炒饭"
    }
  }
}
</script>
