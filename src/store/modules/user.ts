// 创建用户相关的状态
import {defineStore} from 'pinia'

// 创建用户状态
let useUserStore = defineStore('User',{
    // 存数据的地方
    state:()=>{
        return {

        }
    },
    // 异步|逻辑的地方
    actions:{
        // 用户登录的方法
        userLogin(){
            console.log(123)
        }
    },
    getters:{

    }
})

// 对外暴露
export default useUserStore;