import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/Home",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/Home",
      },
      {
        path: "Home",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "Explore",
        component: () => import("@/views/ExplorePage.vue"),
      },
      {
        path: "Profile",
        component: () => import("@/views/ProfilePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
