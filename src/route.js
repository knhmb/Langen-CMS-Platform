import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import AccountCreate from "./pages/AccountCreate";
import AccountEdit from "./pages/AccountEdit";
import Page from "./pages/Page";
import PageCreate from "./pages/PageCreate";
import ItemMainCategory from "./pages/ItemMainCategory";
import ItemMainCategoryCreate from "./pages/ItemMainCategoryCreate";

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
    { path: "/account-create", component: AccountCreate },
    { path: "/account-edit", component: AccountEdit },
    { path: "/page", component: Page },
    { path: "/page-create", component: PageCreate },
    { path: "/item-main-category", component: ItemMainCategory },
    { path: "/item-main-category-create", component: ItemMainCategoryCreate },
  ],
});

export default router;
