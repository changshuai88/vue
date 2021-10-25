<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld v-if="isShow" :msg="msg" />
  <button @click="changeEvent">点击修改msg</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      msg:"cjs",
      isShow:true
    }
  },
  methods:{
    changeEvent(){
      this.msg="cyu";
      this.isShow=!this.isShow;
    }
  },
  components: {
    HelloWorld
  },
  // beforeCreate(){
  //   console.log("beforeCreate:初始化数据之前");
  // },
  // created(){
  //   console.log("created:初始化数据之后");
  // },
  // beforeMount(){
  //   console.log("beforeMount:挂载渲染之前");
  // },
  // mounted(){
  //   console.log("Mounted:挂载渲染之后");
  // },
  // beforeUpdate(){
  //   console.log("beforeUpdate:更新之前");
  // },
  // updated(){
  //   console.log("updated:更新之后");
  // },
  // beforeUnmount(){
  //   console.log("beforeUnmount:销毁之前");
  // },
  // unmounted(){
  //   console.log("unmounted:销毁之后");
  // }
}
</script>
