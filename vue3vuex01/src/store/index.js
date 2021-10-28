import { reactive } from 'vue'

const store={
    state:reactive({
        message:'helloworld',
        duanziList:[]
    }),
    setMessage(value){
        this.state.message=value;
    },
    setDzLsit(list){
        this.state.duanziList=list
    }
}

export default store