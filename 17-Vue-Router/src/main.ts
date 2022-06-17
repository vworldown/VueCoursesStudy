import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";

router.beforeEach((to, from, next) => {
  console.log("Global beforEach");
  console.log(to, from);
  next();
});

createApp(App).use(router).mount("#app");
