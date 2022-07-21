import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard },
  ],
});

export default router;
