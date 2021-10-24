<template>
<h1>事件监听</h1>
<h1 @click="addEvent">{{ num }}</h1>
<h1>带入参数</h1>
<h1 @click="addNumEvent(10)">{{ num }}</h1>
<h2>直接写入表达式</h2>
<h1 @click="num+=2">{{ num }}</h1>
<h1>两个参数，参数和对象</h1>
<h1 @click="addNumEvent1(10,$event)">{{ num }}</h1>
<h2>完整写法</h2>
<h1 :style="{background:color}" v-on:click="addNumEvent1(10,$event) , changeColor()">{{ num }}</h1>
<h3>事件修饰符 .onve 只触发一次</h3>
<h1 @click.once="addNumEvent1(10,$event)">{{ num }}</h1>

<h2>按键修饰符</h2>
<input type="text" @keydown.enter="searchEvent">
<h2>系统修饰符</h2>

</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
        num:0,
        color:'red'
      }
  },
  methods:{
    // 默认参数event，没写也是event
    addEvent:function (event) {
      console.log(event);
      this.num += 2;
    },
    // 写入参数后就采用参数内容
    addNumEvent:function(number){
      this.num += number;
    },
    // 若要两个参数都有，就把默认的event写为第二个参数
    addNumEvent1:function(number,event){
      console.log(event);
      this.num += number;
    },
    changeColor:function () {
      console.log(this.color);
      this.color='yellow';
      
    },
    searchEvent:function(){
      console.log('执行了回车搜索');
    }
  }
}
</script>