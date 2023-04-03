import { createApp } from "vue";
import App from "./App.vue";
import "@/style/index.scss";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import "./style/element/index.scss";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 自动注册 designer 组件
const widgets_modules = import.meta.glob(
  "./components/form-designer/components/**/*.vue"
);
for (const [key, component] of Object.entries(widgets_modules)) {
  const module: any = await widgets_modules[key]();
  const name = key.split("/").slice(-1)[0].split(".")[0];
  app.component(name, module.default);
}

app.use(ElementPlus, { locale: zhCn }).mount("#app");
