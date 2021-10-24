<template>
    <input type="text" v-model="username">
    <button @click="sendMsg">将数组提交到父组件</button>
</template>

<script>
export default {
    setup() {
        return{
            username:''
        }
    },
    methods:{
        sendMsg:function () {
            // 出发自定义事件,$emit(事件名称.发送的事件的参数)
            this.$emit('sendParentMsg',this.username)
        }
    }
}
</script>