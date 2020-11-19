import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Detail from "./views/Detail.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/:name",
      name: "detail",
      component: Detail,
      meta: { transitionName: "slide" }
    }
  ]
});
