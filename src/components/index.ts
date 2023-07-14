import type { App, Component } from "vue";
import SvgIcon from "./SvgIcon/index.vue";
// 要引入的插件
const components: { [name: string]: Component } = {
  SvgIcon,
};

// 对外暴露插件
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
