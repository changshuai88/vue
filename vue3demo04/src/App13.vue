<template>

  <ol>
    <li v-for="(item,i) in news" :key="i">{{item}}===>{{i}}</li>
  </ol>

  <ol>
    <li v-for="(item,i) in news1" :key="i">{{item.tag}}=={{item.title}}=={{ item.num }}=>{{i}}</li>
  </ol>

   <ol>
    <li v-for="(item,i) in cjs" :key="i">{{i}}=>{{ item}}</li>
  </ol>

  <ol>
    <li v-for="(item,i) of cjs" :key="i">{{i}}=>{{ item}}</li>
  </ol>

</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      news:[
      'v-once指令，使得内容只渲染一次',
      'v-html指令，使得内容插入html代码',
      'v-bind指令，绑定属性的内容'
      ],
      news1:[
        {title:'v-once指令，使得内容只渲染一次',tag:'v-once',num:'450万'},
        {title:'v-html指令，使得内容插入html代码',tag:'v-html',num:'50万'},
        {title:'v-bind指令，绑定属性的内容',tag:'v-bind',num:'40万'}
      ],
      // 输出对象
      cjs:{
        name:'cjs',
        age:36,
        sex:'male'
      }

      }
  }
}
</script>