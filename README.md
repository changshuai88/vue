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
 

