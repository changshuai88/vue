<template>
  <router-view />
  <div id="nav">
    <router-link class="tab-bar-item" to="/">
      <div class="icon"><i class="iconfont icon-home"></i></div>
      <div>网站首页</div>
    </router-link>
    <router-link class="tab-bar-item" to="/about">
      <div class="icon"><i class="iconfont icon-aboutus"></i></div>
      <div>关于我们</div>
    </router-link>
    <router-link class="tab-bar-item" to="/goods">
      <div class="icon"><i class="iconfont icon-goods_new_light"></i></div>
      <div>产品中心</div>
    </router-link>
    <router-link class="tab-bar-item" to="/news">
      <div class="icon"><i class="iconfont icon-news-filling"></i></div>
      <div>新闻中心</div>
    </router-link>
    <router-link class="tab-bar-item" to="/contact">
      <div class="icon"><i class="iconfont icon-contact"></i></div>
      <div>联系我们</div>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "assets/css/base.css";
@import "assets/css/iconfont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  a {
    color: var(--color-text);
    display: inline-block;
    padding: 5px 15px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 50px;
    font-size: var(--font-size);
  }
  .tab-bar-item .icon {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>
