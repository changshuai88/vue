<script setup>
import { ref } from 'vue'
import axios from 'axios'

let api='https://api.apiopen.top/getJoke?page=1&count=10&type=text'
let m=[]
function a(api){
  console.log(api);
  axios.get(api).then(res=>{
    
    m=res.data;
    console.log(m);
    m=m.result;
  console.log(m);
  })
  
}








defineProps({
  
  msg: String,
  
})

const count = ref(0)

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1 @click="a(api)">点击</h1>

  <h1 v-for="(n,i) in m">{{n.text}}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
