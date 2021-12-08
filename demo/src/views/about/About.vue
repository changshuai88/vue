<template>
  <div class="about">
    <nav-bar>
      <!-- <template v-slot:left>&lt;</template> -->
      <template v-slot:default>公司简介</template>
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
