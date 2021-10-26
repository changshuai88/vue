<template>
  
  <h1 @click="changeEvent">计数：{{ count }}</h1>
  <h1 @click="changeNum">计数：{{ num }}</h1>

  <h1>用户名：{{user.userName}}</h1>
  <h1>学校：{{user.school}}</h1>

  <h2>toRef后</h2>
  <h1>用户名：{{userName}}</h1>
  <h1>学校：{{ school }}</h1>
  <button @click="changeSchool">更改学校</button>
  <h1>学校反转{{reverseSchool}}</h1>
  <User :userName='userName' :age='age' class='abc' />
</template>

<script>
import {ref,reactive,toRefs,computed,watchEffect,watch} from 'vue'
import User from './components/User.vue'

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
  components:{
      User
  },
  setup(){
    console.log('setup');
    const num=ref(0);
    const user =reactive({
      userName:'cjs',
      age:30,
      school:'cyu',
      reverseSchool:computed(()=>{
        return user.school.split('').reverse().join('');
      })
    })
    function changeNum(){
      num.value+=10;
    }
    function changeSchool(){
      user.school='bazhong'
    }
    watchEffect(()=>{
      console.log(user.school);
      console.log('当school改变的时候会触发执行此函数');
    })
    watch(num,(newNum,prevNum)=>{
      console.log(newNum);
      console.log(prevNum);
      console.log('监听哪个函数，在回调前面，写入参数名');
    })
    watch([num,user],(newNum,prevNum)=>{
      console.log(newNum);
      console.log(prevNum);
      console.log('多个监听，就是watch监听第一个参数变成数组');
    })
    return {num,changeNum,user,...toRefs(user),changeSchool};
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
