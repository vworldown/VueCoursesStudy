import { createRouter, createWebHashHistory } from "vue-router";
import TeamsList from "../components/teams/TeamsList.vue";
import TheFooter from "../components/nav/TheFooter.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams",
    },
    {
      path: "/teams",
      components: { default: TeamsList, footer: TheFooter },
      children: [
        {
          path: ":id",
          component: () => import("../components/teams/TeamMembers.vue"),
        },
      ],
    },
    {
      path: "/users",
      component: () => import("../components/users/UsersList.vue"),
    },
    {
      // 括号中为参数(:notFound)指定一个自定义的正则
      // .* 是匹配所有
      path: "/:notFound(.*)",
      component: () => import("../components/NotFound.vue"),
    },
  ],
  linkActiveClass: "active",
});
