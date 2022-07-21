import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard },
    { path: "/dashboard", component: Dashboard },
    { path: "/overview", component: Overview },
  ],
});

export default router;
