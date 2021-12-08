<template>
  <div>
    <nav-bar>
      <!-- <template v-slot:left>&lt;</template> -->
      <template v-slot:default>联系我们</template>
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
