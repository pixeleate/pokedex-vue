import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createProvider } from "./vue-apollo";
import Toasted from "vue-toasted";

import "@/styles/index.css";

Vue.config.productionTip = false;

// eslint-disable-next-line no-console
Vue.prototype.$log = console.log;

Vue.use(Toasted);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
