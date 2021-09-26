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

