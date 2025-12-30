import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";

// 导入 element-plus 样式
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import plugins from "@/plugins";

import "normalize.css/normalize.css"; // 清除默认样式
import "uno.css"; // 导入 UnoCSS
import "@/style/index.scss"; // 加载全局样式

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
// app.use(ElementPlus);
app.use(plugins);
app.mount("#app");
