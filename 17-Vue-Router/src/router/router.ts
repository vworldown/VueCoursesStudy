import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams",
    },
    {
      path: "/teams",
      component: () => import("../components/teams/TeamsList.vue"),
    },
    {
      path: "/teams/:id",
      component: () => import("../components/teams/TeamMembers.vue"),
    },
    {
      path: "/users",
      component: () => import("../components/users/UsersList.vue"),
    },
    // {
    //   path: "/user"
    // }
  ],
  linkActiveClass: "active",
});
