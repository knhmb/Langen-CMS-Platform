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
import Privilege from "./pages/Privilege";
import PrivilegeCreate from "./pages/PrivilegeCreate";
import Language from "./pages/Language";
import LanguageCreate from "./pages/LanguageCreate";
import Setting from "./pages/Setting";
import SettingCreate from "./pages/SettingCreate";
import Notification from "./pages/Notification";
import Item from "./pages/Item";
import ItemCreate from "./pages/ItemCreate";
import Coupon from "./pages/Coupon";
import CouponCreate from "./pages/CouponCreate";
import Comment from "./pages/Comment";
import Reservation from "./pages/Reservation";
import ReservationDetail from "./pages/ReservationDetail";
import ForgotPassword from "./pages/ForgotPassword";

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
    { path: "/privilege", component: Privilege },
    { path: "/privilege-create", component: PrivilegeCreate },
    { path: "/language", component: Language },
    { path: "/language-create", component: LanguageCreate },
    { path: "/setting", component: Setting },
    { path: "/setting-create", component: SettingCreate },
    { path: "/notification", component: Notification },
    { path: "/item", component: Item },
    { path: "/item-create", component: ItemCreate },
    { path: "/coupon", component: Coupon },
    { path: "/coupon-create", component: CouponCreate },
    { path: "/comment", component: Comment },
    { path: "/reservation", component: Reservation },
    { path: "/reservation-detail", component: ReservationDetail },
    { path: "/forgot-password", component: ForgotPassword },
  ],
});

export default router;
