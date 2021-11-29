<template>
<button class="btn">111</button>
<div class="b_contain">
  <ul>
    <li><img src="http://img4.yun300.cn/repository/image/-RnBPFpbRJqcFMui073kPQ.jpg?tenantId=132892&viewType=1" alt=""></li>
    <li><img src="http://img4.yun300.cn/repository/image/-RnBPFpbRJqcFMui073kPQ.jpg?tenantId=132892&viewType=1" alt=""></li>
    <li><img src="http://img4.yun300.cn/repository/image/-RnBPFpbRJqcFMui073kPQ.jpg?tenantId=132892&viewType=1" alt=""></li>
  </ul>
</div>
  <img :src="imgsrc" alt="">
</template>

<script>
export default {
  name: 'banner',
  data (){
    return {
      imgsrc: require('assets/images/1.jpeg'),
    },
  },
  computed:{

  }
};
</script>

<style scoped lang="scss">
.b_contain{
  margin: 0 auto;
  width: 100%;
  ul{
    list-style: none;
    li{
    display: inline-block;
      img{
       width: 100%;
      }
    }
  }
}
</style>
