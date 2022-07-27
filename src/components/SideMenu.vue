<template>
  <aside class="side-menu">
    <div class="header">
      <!-- <h3>CMS Platform</h3> -->
      <img class="logo" src="../assets/logo@2x.png" alt="" />
      <p class="profile-name">taimanchan123123</p>
      <div class="header-menu">
        <div class="single-menu">
          <img src="../assets/profile@2x.png" alt="" />
          <p>Profile</p>
        </div>
        <div
          @click="navigate('/notification')"
          :class="{ 'is-active': $route.path === '/notification' }"
          class="single-menu"
        >
          <img src="../assets/notification@2x.png" alt="" />
          <p>Notification</p>
          <span>24</span>
        </div>
        <div class="single-menu">
          <img src="../assets/sign-out@2x.png" alt="" />
          <p>Sign out</p>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="body-menu">
        <div class="single-menu">
          <div
            @click="navigate('/dashboard')"
            :class="{ 'is-active': $route.path === '/dashboard' }"
            class="menu-item"
          >
            <img src="../assets/dashboard@2x.png" alt="" />
            <p>Dashboard</p>
          </div>
        </div>
        <div class="single-menu">
          <div
            :class="{ 'is-selected': accountMenu }"
            class="menu-item"
            @click="accountMenu = !accountMenu"
          >
            <img src="../assets/account@2x.png" alt="" />
            <p>Account</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
          </div>
          <div v-if="accountMenu" class="sub-menu-list">
            <div
              :class="{
                'is-active':
                  $route.path === '/overview' ||
                  $route.path === '/account-create' ||
                  $route.path === '/account-edit',
              }"
              @click="navigate('/overview')"
              class="sub-menu"
            >
              <p>Overview</p>
            </div>
          </div>

          <!-- <img src="../assets/account@2x.png" alt="" />
          <p>Account</p>
          <img class="arrow" src="../assets/arrow@2x.png" alt="" /> -->
        </div>
        <div class="single-menu">
          <div
            :class="{ 'is-selected': cmsMenu }"
            class="menu-item"
            @click="cmsMenu = !cmsMenu"
          >
            <img src="../assets/cms@2x.png" alt="" />
            <p>CMS</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
          </div>
          <div v-if="cmsMenu" class="sub-menu-list">
            <div
              :class="{
                'is-active':
                  $route.path === '/page' || $route.path === '/page-create',
              }"
              @click="navigate('/page')"
              class="sub-menu"
            >
              <p>Page</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/item-main-category' ||
                  $route.path === '/item-main-category-create',
              }"
              @click="navigate('/item-main-category')"
              class="sub-menu"
            >
              <p>Item main category</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/item-sub-category' ||
                  $route.path === '/item-sub-category-create',
              }"
              @click="navigate('/item-sub-category')"
              class="sub-menu"
            >
              <p>Item sub category</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/theme-category' ||
                  $route.path === '/theme-category-create',
              }"
              @click="navigate('/theme-category')"
              class="sub-menu"
            >
              <p>Theme category</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/banner-slideshow' ||
                  $route.path === '/banner-slideshow-create',
              }"
              @click="navigate('/banner-slideshow')"
              class="sub-menu"
            >
              <p>Banner slideshow</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/amenity' ||
                  $route.path === '/amenity-create',
              }"
              @click="navigate('/amenity')"
              class="sub-menu"
            >
              <p>Amenity</p>
            </div>
          </div>
        </div>
        <div class="single-menu">
          <div
            @click="hotelMenu = !hotelMenu"
            :class="{ 'is-selected': hotelMenu }"
            class="menu-item"
          >
            <img src="../assets/hotel@2x.png" alt="" />
            <p>Hotel</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
          </div>
          <div v-if="hotelMenu" class="sub-menu-list">
            <div
              :class="{
                'is-active':
                  $route.path === '/item' || $route.path === '/item-create',
              }"
              @click="navigate('/item')"
              class="sub-menu"
            >
              <p>Item</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/coupon' || $route.path === '/coupon-create',
              }"
              @click="navigate('/coupon')"
              class="sub-menu"
            >
              <p>Coupon</p>
            </div>
            <div
              :class="{ 'is-active': $route.path === '/comment' }"
              @click="navigate('/comment')"
              class="sub-menu"
            >
              <p>Comment</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/reservation' ||
                  $route.path === '/reservation-detail',
              }"
              @click="navigate('/reservation')"
              class="sub-menu"
            >
              <p>Reservation</p>
            </div>
          </div>
        </div>
        <div class="single-menu">
          <div
            @click="systemMenu = !systemMenu"
            :class="{ 'is-selected': systemMenu }"
            class="menu-item"
          >
            <img src="../assets/system@2x.png" alt="" />
            <p>System</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
          </div>
          <div v-if="systemMenu" class="sub-menu-list">
            <div
              :class="{
                'is-active':
                  $route.path === '/privilege' ||
                  $route.path === '/privilege-create',
              }"
              @click="navigate('/privilege')"
              class="sub-menu"
            >
              <p>Privilege</p>
            </div>
            <div
              :class="{
                'is-active':
                  ($route.path === '/language')
                  | ($route.path === '/language-create'),
              }"
              @click="navigate('/language')"
              class="sub-menu"
            >
              <p>Language</p>
            </div>
            <div
              :class="{
                'is-active':
                  $route.path === '/setting' ||
                  $route.path === '/setting-create',
              }"
              @click="navigate('/setting')"
              class="sub-menu"
            >
              <p>Setting</p>
            </div>
          </div>
        </div>
        <div class="single-menu">
          <div class="menu-item language">
            <img src="../assets/langauge@2x.png" alt="" />
            <p>English</p>
            <img class="arrow" src="../assets/other@2x.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      accountMenu: false,
      cmsMenu: false,
      systemMenu: false,
      hotelMenu: false,
    };
  },
  watch: {
    $route() {
      if (this.isOverview) {
        this.accountMenu = true;
      }
      if (this.isCms) {
        this.cmsMenu = true;
      }
      if (this.isHotel) {
        this.hotelMenu = true;
      }
      if (this.isSystem) {
        this.systemMenu = true;
      }
    },
  },
  computed: {
    isOverview() {
      if (
        this.$route.path === "/overview" ||
        this.$route.path === "/account-create" ||
        this.$route.path === "/account-edit"
      ) {
        return true;
      }
      return false;
    },
    isCms() {
      if (
        this.$route.path === "/page" ||
        this.$route.path === "/page-create" ||
        this.$route.path === "/item-main-category" ||
        this.$route.path === "/item-main-category-create" ||
        this.$route.path === "/item-sub-category" ||
        this.$route.path === "/item-sub-category-create" ||
        this.$route.path === "/theme-category" ||
        this.$route.path === "/theme-category-create" ||
        this.$route.path === "banner-slideshow" ||
        this.$route.path === "/banner-slideshow-create" ||
        this.$route.path === "/amenity" ||
        this.$route.path === "/amenitycreate"
      ) {
        return true;
      }
      return false;
    },
    isHotel() {
      if (
        this.$route.path === "/item" ||
        this.$route.path === "/item-create" ||
        this.$route.path === "/coupon" ||
        this.$route.path === "/coupon-create" ||
        this.$route.path === "/comment" ||
        this.$route.path === "/reservation" ||
        this.$route.path === "/reservation-detail"
      ) {
        return true;
      }
      return false;
    },
    isSystem() {
      if (
        this.$route.path === "/privilege" ||
        this.$route.path === "/privilege-create" ||
        this.$route.path === "/language" ||
        this.$route.path === "/language-create" ||
        this.$route.path === "/setting" ||
        this.$route.path === "/setting-create"
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.side-menu {
  background: #ffffff;
  box-shadow: 4px 0px 16px rgba(81, 97, 122, 0.12);
  height: 100%;
}

.side-menu .header {
  padding: 1rem;
  border-bottom: 1px solid #d9d9d9;
}

.side-menu .body {
  padding: 1rem;
}

/* .side-menu h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "liga" off;
  color: #005085;
  margin-bottom: 3rem;
} */

.side-menu img.logo {
  width: 100%;
  margin-bottom: 3rem;
}

.side-menu p.profile-name {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 1.5rem;
}

/* .side-menu .header .header-menu .single-menu {
  padding: 0.5rem 0.5rem;
} */

.side-menu .header .header-menu .single-menu:hover,
.side-menu .header .header-menu .single-menu.is-active {
  background: linear-gradient(0deg, #f2f5f8, #f2f5f8), #ffffff;
  border-radius: 8px;
}

.side-menu .header .header-menu .single-menu span {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #ee5858;
  text-align: end;
  width: 100%;
}

.side-menu .header .header-menu .single-menu,
.side-menu .body .body-menu .single-menu .menu-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.side-menu .body .body-menu .single-menu .menu-item {
  margin-bottom: 1rem;
  padding: 0.5rem;
}

.side-menu .body .body-menu .single-menu .menu-item.is-active {
  background: linear-gradient(0deg, #f2f5f8, #f2f5f8), #ffffff;
  border-radius: 8px;
}

.side-menu .body .body-menu .single-menu .menu-item.is-selected img.arrow {
  transform: rotate(180deg);
}

.side-menu .body .body-menu .single-menu .sub-menu {
  margin-top: 1rem;
  padding-left: 2rem;
  cursor: pointer;
  padding: 0.5rem 2rem;
}

.side-menu .body .body-menu .single-menu .sub-menu:hover,
.side-menu .body .body-menu .single-menu .sub-menu.is-active {
  background: linear-gradient(0deg, #f2f5f8, #f2f5f8), #ffffff;
  border-radius: 8px;
}

.side-menu .body .body-menu .single-menu .menu-item.language {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 0.7rem;
}

.side-menu .header .header-menu .single-menu img,
.side-menu .body .body-menu .single-menu img {
  width: 1.3rem;
  margin-right: 0.7rem;
}

.side-menu .body .body-menu .single-menu img.arrow {
  margin-left: auto;
  margin-right: 0;
  transition: 0.3s;
}

.side-menu .header .header-menu .single-menu p,
.side-menu .body .body-menu .single-menu p {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
  transition: 0.3s;
}

.side-menu .body .body-menu .single-menu p {
  font-weight: 500;
}

.side-menu .header .header-menu .single-menu p:hover {
  padding-left: 0.3rem;
}
</style>