<template>
  <input type="text" v-model="searchKey" @keydown.enter="searchEvent">
  <h1>{{ searchKey }}</h1>
  <!-- 若要运行正常，必须在data里面先声明lineText -->
  <textarea v-model="lineText" name="textarea" id="" cols="30" rows="10"></textarea>
  <h1>{{ lineText }}</h1>
  <h2>复选框</h2>
  <!-- 表单获取的是是否选中内容 -->
  <input type="checkbox" name="" id="" v-model="checked" value="123">
  <h2>{{ checked }}</h2>
  <!-- 复选框多个值的情况 -->
  <input type="checkbox" name="苹果" id="" v-model="fruit" value="苹果">
  <input type="checkbox" name="苹果" id="" v-model="fruit" value="雪梨">
  <input type="checkbox" name="苹果" id="" v-model="fruit" value="香蕉">
  <input type="checkbox" name="苹果" id="" v-model="fruit" value="葡萄">
  <h1>{{fruit}}</h1>

  <p>单选框</p>
  <input type="radio" name="sex" id="" v-model="picked" value="male">
  <input type="radio" name="sex" id="" v-model="picked" value="female">
  <h1>{{picked}}</h1>

  <!-- 选项框 -->
  <select name="city" id="" v-model="city">
    <option disabled value="">Please select one</option>
    <option value="天津">天津</option>
    <option value="北京">北京</option>
    <option value="秦皇岛">秦皇岛</option>  
  </select>
  <h1>city:{{ city }}</h1>

    <!-- 选项框 多选 -->
  <select name="city" id="" v-model="cities" multiple>
    <option disabled value="">Please select one</option>
    <option value="天津">天津</option>
    <option value="北京">北京</option>
    <option value="秦皇岛">秦皇岛</option>  
  </select>
  <h1>city:{{ cities }}</h1>

  <!-- 表单获取的是是否选中内容 -->
  <input type="checkbox" name="" id="" v-model="checked1" true-value="喜欢" false-value="不喜欢">
  <h2>{{ checked1 }}</h2>

  <!-- 修饰符 .lazy-->
  <input type="text" v-model.lazy="searchKey" @keydown.enter="searchEvent">
  <h1>{{ searchKey }}</h1>

   <!-- 修饰符 .number 将值转化为数字-->
  <input type="text" v-model.number="searchKey1" @keydown.enter="searchEvent">
  <h1>{{ searchKey1 }}</h1>

 <!-- 修饰符 .trim 去掉空格-->
  <input type="text" v-model.trim="searchKey1" @keydown.enter="searchEvent">
  <h1>{{ searchKey1 }}</h1>

</template>

<script>


export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      checked:false,
      lineText:"", 
      searchKey:"百度一下",
      fruit:[],
      picked:"",
      city:"",
      cities:[],
      checked1:"",
      searchKey1:''
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
      console.log(this.searchKey1);

    }
  }
}
</script>