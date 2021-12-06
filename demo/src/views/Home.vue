<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { onMounted } from "vue";
import { getHomeAllData, add } from "network/home";
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  setup() {
    onMounted(() => {
      add(1, 2);
      getHomeAllData()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("err");
        });
    });
  },
  components: {
    Banner,
  },
};
</script>
