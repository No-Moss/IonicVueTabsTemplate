import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/Tabs/TabsPage.vue";

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
        component: () => import("@/views/Home/HomePage.vue"),
        meta: {
          mainContentId: "home-main-content",
        },
      },
      {
        path: "Explore",
        component: () => import("@/views/Explore/ExplorePage.vue"),
        meta: {
          mainContentId: "explore-main-content",
        },
      },
      {
        path: "Profile",
        component: () => import("@/views/Profile/ProfilePage.vue"),
        meta: {
          mainContentId: "profile-main-content",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
