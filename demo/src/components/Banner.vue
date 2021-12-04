<template>
  <h1>轮播图</h1>
  <div class="b_contain">
    <img src="~assets/images/1.jpeg" alt="" />
  </div>
  <img :src="imgsrc" alt="" />
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      imgsrc: require("assets/images/1.jpeg"),
    };
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.b_contain {
  margin: 0 auto;
  width: 100%;
  ul {
    list-style: none;
    li {
      display: inline-block;
      img {
        width: 100%;
      }
    }
  }
}
</style>
