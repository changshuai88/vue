<template>
  
  <h1 @click="changeEvent">计数：{{ count }}</h1>
  <h1 @click="changeNum">计数：{{ num }}</h1>

  
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  data(){
    console.log('data');
    return{
      count:"",
      isShow:true
    }
  },
  methods:{
    changeEvent(){
      this.count++;
    }
  },
  setup(){
    console.log('setup');
    const num=ref(0);
    
    function changeNum(){
      num.value+=10;
    };
    return {num,changeNum};
  },
  beforeCreate(){
    console.log("beforeCreate:初始化数据之前");
  },
  created(){
    console.log("created:初始化数据之后");
  },
  beforeMount(){
    console.log("beforeMount:挂载渲染之前");
  },
  mounted(){
    console.log("Mounted:挂载渲染之后");
  }
 
}
</script>
