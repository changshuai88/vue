<template>
<h1>ajax 请求</h1>
 <div class="home">
    {{ data.name }}
  </div>
</template>

<script>

import axios from 'axios'

export default {

  data() {
    let api='https://api.apiopen.top/getJoke?page=1&count=10&type=text'
    axios.get(api).then((result)=>{
      console.log(result);
    })
}

}
</script>
