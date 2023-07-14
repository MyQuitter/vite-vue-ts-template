import { createApp } from "vue";
import App from "@/App.vue";
// 引入scss公共样式
import "@/assets/styles/index.scss";
// 引入svg插件
import "virtual:svg-icons-register";
// 引入全局组件
import gloablComponent from './components/index';
// // 引入axios
// import axios from "axios";
// 引入路由
import router from './router';
// 引入状态管理
import pinia from './store';




const app = createApp(App)

// 注册模板路由
app.use(router);
// 注册状态管理
app.use(pinia);

// 将组件挂载
app.use(gloablComponent);

app.mount("#app");
// console.log(import.meta.env.VITE_APP_TITLE);
