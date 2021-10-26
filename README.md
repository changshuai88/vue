# vue
study vue

# vue3
## 引入vue3的两种方式：
### 1.直接导入
`<script src="https://unpkg.com/vue@next"></script>`
### 2.脚手架方式vite
Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。
操作步骤：
- npm init vite-app vue3demo02(要创建的demo的文件夹名字)
- cd vue3demo02 //定位到创建的demo文件夹
- npm install  //安装相关文件
- npm run dev  //运行--生成链接地址

### 3.声明式
```
export default {
  name: 'App',
  data(){
    return {
      msg:"hello world"
    }
  }
}
```
### 4.命令式
`document.querySelector("").innerHTML="你好";`

### 5.数据双向绑定
页面会根据数据的变化而发生变化。
不需要刷新页面就能够实现。

### 6.写简单的小组件的时候用Vue2的写法是最简单的，以后写高级的会用vue3的写法

- 双大括号是插入字符串
- v-once指令，使得内容只渲染一次
- v-html指令，使得内容插入html代码
- v-bind指令，绑定属性的内容

  ***如果在一个机器上写完项目上传到git，在从另一台机器从git下载后不能使用npm run dev 请如下操作***
  - npm cache verify
  - npm install
  - 再npm run dev 就行了。
### 7.JavaScript表达式可以在模板中使用
 模板中还可以使用三元运算 这里只能放置一个表达式，不能放置多个。只能放置一个简单的表达式

### 8.动态指令
arrtibuteName 为自定义随机变量名 id为自定义随机变量名
`<div v-bind:[arrtibuteName]="id"></div>`
`<button @click="toggleType">更改选择器名</button>`

### 9.计算属性 computed:
在computed:后面类似methods一样写入方法,但是这个是直接返回值,不用另外调用.

### 10. 观察者watch:

在watch：{
  要监听的变量名：方法（）{}
<<<<<<< HEAD
}
### 11.类和样式绑定
类class
>>>>>>> 3b83f10db48e7118cd2c2117912d184a9a012de8
第一种写法放置字符串
`<h1 :class="msg">hello</h1>`
第二种写法，放置对象
`<h1 :class="{active:isActive}">hello2</h1>`
`<button @click="toggleActive">切换active</button>`
第三种写法，放置数组
`<h1 :class="arr">hello3</h1>`
第四种写法，数组和对象的结合 数组种可以是字符串也可以是变量
`<h1 :class="['abc',{active:true},className]">hello4</h1>`

### 绑定内联样式 style

1.若是样式名是由-连接的多个单词，需要加引号 'background-color':'orange'
2.也可也采用驼峰命名法 backgroundColor:'gold'
              
### 条件渲染
1. v-if
v-if
v-else-if
v-else
只会显示满足条件的代码
```
<h1 v-if="user=='超级vip'">欢迎有钱人</h1>
<h1 v-else-if="user=='vip' ">欢迎会员登陆</h1>
<h1 v-else>充值会让你更强大</h1>
```
2.v-show
v-show = bool值
真就显示，假就不显示
`<h1 v-show="isShow">切换显示内容</h1>`

3. v-for
news为数组，也可以为对象
`<li v-for="(item,i) in news" :key="i">{{item}}===>{{i}}</li>`

4.v-for   of 
`<li v-for="(item,i) of cjs" :key="i">{{i}}=>{{ item}}</li>`

# 事件绑定
## 事件监听
我们可以使用 v-on 指令 (通常缩写为 @ 符号) 来监听 DOM 事件，并在触发事件时执行一些 JavaScript。用法为 v-on:click="methodName" 或使用快捷方式 @click="methodName"

* 一个事件绑定两个方法的时候，方法要加括号 *
### 事件修饰符
- .stop
- .prevent
- .capture
- .self
- .once
- .passive
### 按键别名
Vue 为最常用的键提供了别名：

.enter
.tab
.delete (捕获“删除”和“退格”键)
.esc
.space
.up
.down
.left
.right

### 系统修饰键
可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

.ctrl
.alt
.shift
.meta
### 鼠标按键修饰符
.left/.right/.middle

## 表单输入绑定
https://v3.cn.vuejs.org/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95

# 组件
* 语法
  1.先在components文件夹创建以大写字母开头的Name.vue文件，代码如下：
```
  <template>
    <h1>{{msg}}这是主体部分</h1>
  </template>
  <script>
  export default {
    setup() {
        return{
            msg:"hello"
        }
    },
  }
  </script>
```
2.在引入文件中需要写三个位置的代码，组件可以重复导入，如下：
```
<template>
<Header></Header>
<Header></Header>
<Header></Header>
</template>
<script>

// 导入Header.vue组件
import Header from './components/Header.vue'
export default {
  name: 'App',
  // 用到的变量
  data(){
    return{
      
      }
  },
  components:{
    Header,Main,Footer
  }
}
</script>
```

# API

## setup 函数
目的，为了让数据和方法等相关代码放在一起。
```
setup(){
    console.log('setup');
    const num=ref(0);
    
    function changeNum(){
      num.value+=10;
    };
    return {num,changeNum};
  },
```
```
<template>
  <h1 @click="changeNum">计数：{{ num }}</h1>
</template>
```
好处：可以方便的处理单块代码，便于维护。
### 参数引入
- import {ref,reactive} from 'vue'
- ref ，使一个值，数字，字符串 变成响应式
- reactive，使对象变成响应式
- toRefs,把对象的对象名省略。
- computed
- watchEffect 响应式监听，数据发生改变,用到那个参数就监听那个参数
- watch  监听，监听某个(些)参数改变，引入参数，后面加回调。
### provide  inject
在父组件中用provide
```
import {ref,reactive,toRefs,computed,watchEffect,watch,provide} from 'vue'
//student 为要传给子组件的数据
const student=reactive({
      name:'小红',
      className:'三年五班'
    })
provide('student',student)
```
在子组件中用inject
```
<template>
    <h1>学生</h1>
    <h1>name:{{name}}</h1>  //name为父组件中student对象的属性名
    <h1>className :{{className}}</h1>
</template>
<script>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUnmounted,inject} from 'vue'
export default {
    setup(props,content) {
        const student=inject('student')
        return {...student};
    },
    props:['userName','age']
}
</script>
```
# 路由
安装的时候除了安装原来的依赖包之外还要安装路由
终端安装
npm install vue-router@4
若是不成功，可以重新安装以下代码，再安装路由
cnpm install
cnpm install vue-router@4
