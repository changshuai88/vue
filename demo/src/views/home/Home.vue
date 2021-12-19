<template>
  <div>
    <nav-bar>
      <!-- <template v-slot:left>&lt;</template> -->
      <template v-slot:default>天工平地机配件</template>
    </nav-bar>
    <div class="banner">
      <img src="~assets/images/1.jpeg" alt="" />
    </div>
    <Recommend />
    <h2 v-for="(item, i) in names" :key="i">
      {{ item.content }}
      <hr />
    </h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { onMounted, ref } from "vue";
import { getHomeAllData } from "network/home";
import NavBar from "components/common/navbar/NavBar.vue";
import Recommend from "./ChildComps/Recommend.vue";

export default {
  name: "Home",
  setup() {
    const names = ref([]);
    onMounted(() => {
      // add(1, 2);
      getHomeAllData()
        .then((res) => {
          // console.log(res);
          names.value = res;
          console.log(names);
          // return name;
        })
        .catch((err) => {
          console.log(err);
        });
      // return name;
    });
    return {
      names,
    };
  },
  components: {
    NavBar,
    Recommend,
  },
};
</script>
<style lang="scss" scoped>
.banner {
  // width: 100%;
  img {
    width: 100%;
    height: auto;
    margin-top: 45px;
  }
}
</style>
