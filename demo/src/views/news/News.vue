<template>
  <div>
    <nav-bar>
      <!-- <template v-slot:left>&lt;</template> -->
      <template v-slot:default>企业新闻</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
