import Vue from "vue";
import App from "./App.vue";
import Store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import router from "./router";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  Store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; // 安装全局事件总线，$bus 就是当前应用的 vm
  },
}).$mount("#app");
