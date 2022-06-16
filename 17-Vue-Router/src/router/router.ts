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
  // scrollBehavior 函数接收 to和 from 路由对象
  // 第三个参数 savedPosition，只有当这是一个 popstate 导航时才可用（由浏览器的后退/前进按钮触发）
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});
