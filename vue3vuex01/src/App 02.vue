<template>
<h1>ajax 请求</h1>
<p v-for="(item,i) in store.state.duanziList" :key='i'>{{item.text}}</p>
<button @click="getMesg">点击</button>
</template>

<script>

import store from './store/index.js'
import axios from 'axios'

export default {
  name: 'App',
  provide:{
    store
  },

  setup(){
    let api='https://api.apiopen.top/getJoke?page=1&count=10&type=text'
    // fetch(api).then(res=>res.json()).then(result=>{
    //   store.setDzLsit(result.result)
    //   console.log(result);
    // })
    // console.log(axios.get(api));
    // const axios = require('axios')
    axios.get(api).then((result)=>{
      console.log(result);
    })
  
    // axios.get(api)
    //         .then(function (response) {
    //             // handle success
    //             console.log(response);
               
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(function () {
    //             // always executed
    //         });
    return { store}
  }

}
</script>
