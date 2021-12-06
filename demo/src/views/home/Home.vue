<template>
  <div class="home">
    <nav-bar>
      <template v-slot:left>&lt;</template>
      <template v-slot:default>图书兄弟</template>
    </nav-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { onMounted } from "vue";
// import { getHomeAllData, add } from "network/home";
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "Home",
  setup() {
    // onMounted(() => {
    //   add(1, 2);
    //   getHomeAllData()
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log("err");
    //     });
    // });
  },
  components: {
    NavBar,
  },
};
</script>
