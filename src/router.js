import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import { homeData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Home,
      props: { ...homeData },
    },
  ],
});
