<template>
  <h1>{{ store.state.message }}</h1>
  <button @click="store.setMessage('cjs')">count is: {{ count }}</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  inject:['store']
}
</script>