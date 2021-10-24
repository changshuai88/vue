<template>
<!-- <div class="Header"></div> -->
<Header></Header>
<Header></Header>
<Header></Header>
<Main></Main>
<Footer></Footer>
<Login @sendParentMsg='getChildMsg'></Login>
<h1>从子组件获得的值：{{msg}}</h1>
<!-- 通过Porps传递子组件数据 -->
<News :content="newscontent" :msg="msg"></News>
<!-- <div class="Main"></div> -->
<!-- <div class="Footer"></div> -->


</template>

<script>

// 导入Header.vue组件
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      newscontent:"满船清梦压星河",
      msg:''
      }
  },
  methods:{
    getChildMsg(value){
      console.log(value);
      this.msg=value;
    }
    },
  components:{
    Header,Main,Footer,News,Login
  }
}
</script>