import { createApp,reactive } from 'vue'
import App from './App.vue'
import './index.css'

const store={
    state:reactive({
        message:'helloworld'
    }),
    setMessage(value){
        this.state.message=value;
    }
}

createApp(App).mount('#app')
