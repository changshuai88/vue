<template>
<h1>ajax 请求</h1>
 <div class="home">
    {{ data.name }}
  </div>
</template>

<script>

import { reactive, getCurrentInstance, onMounted } from "vue"

export default {
  setup() {
    let { proxy } = getCurrentInstance();

    let data = reactive({
      name: "hello"
    });

    onMounted(() => {
      console.log(proxy.$axios);
    });

    return { data, proxy };
  }
}
</script>
