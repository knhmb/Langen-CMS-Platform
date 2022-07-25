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
import ItemSubCategory from "./pages/ItemSubCategory";
import ItemSubCategoryCreate from "./pages/ItemSubCategoryCreate";
import ThemeCategory from "./pages/ThemeCategory";
import ThemeCategoryCreate from "./pages/ThemeCategoryCreate";
import BannerSlideshow from "./pages/BannerSlideshow";
import BannerSlideshowCreate from "./pages/BannerSlideshowCreate";
import Amenity from "./pages/Amenity";
import AmenityCreate from "./pages/AmenityCreate";

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
    { path: "/item-sub-category", component: ItemSubCategory },
    { path: "/item-sub-category-create", component: ItemSubCategoryCreate },
    { path: "/theme-category", component: ThemeCategory },
    { path: "/theme-category-create", component: ThemeCategoryCreate },
    { path: "/banner-slideshow", component: BannerSlideshow },
    { path: "/banner-slideshow-create", component: BannerSlideshowCreate },
    { path: "/amenity", component: Amenity },
    { path: "/amenity-create", component: AmenityCreate },
  ],
});

export default router;
