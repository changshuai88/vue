import {createApp,reactive } from 'vue'
import App from './App.vue'
import './index.css'
const app = createApp(App);

import axios from "axios";
app.config.globalProperties.$axios = axios;


app.mount('#app')
