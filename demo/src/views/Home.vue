<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Banner from '../components/Banner.vue';

export default {
  name: 'Home',
  components: {
    Banner,
  },
};
</script>
