import { ConfigEnv, UserConfigExport, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 引入svg 插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// 引入Mock 插件
import { viteMockServe } from "vite-plugin-mock";

export default ({ command }: ConfigEnv): UserConfigExport => {
  console.log(command)
  return {
    base: "./",
    plugins: [
      vue(),
      // svg 插件
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
      // mock 插件
      viteMockServe({
        localEnabled: command === "serve",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // scss 全局变量配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/assets/styles/variable.scss";',
        },
      },
    },
  };
};
