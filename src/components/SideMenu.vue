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
        <div class="single-menu">
          <img src="../assets/notification@2x.png" alt="" />
          <p>Notification</p>
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
          <div class="menu-item">
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
            <div class="sub-menu">
              <p>Overview</p>
            </div>
          </div>

          <!-- <img src="../assets/account@2x.png" alt="" />
          <p>Account</p>
          <img class="arrow" src="../assets/arrow@2x.png" alt="" /> -->
        </div>
        <div class="single-menu">
          <div class="menu-item">
            <img src="../assets/cms@2x.png" alt="" />
            <p>CMS</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
          </div>
        </div>
        <div class="single-menu">
          <div class="menu-item">
            <img src="../assets/hotel@2x.png" alt="" />
            <p>Hotel</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
          </div>
        </div>
        <div class="single-menu">
          <div class="menu-item">
            <img src="../assets/system@2x.png" alt="" />
            <p>System</p>
            <img class="arrow" src="../assets/arrow@2x.png" alt="" />
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
    };
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

.side-menu .header .header-menu .single-menu,
.side-menu .body .body-menu .single-menu .menu-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

.side-menu .body .body-menu .single-menu .menu-item {
  margin-bottom: 0;
}

.side-menu .body .body-menu .single-menu .menu-item.is-selected img.arrow {
  transform: rotate(180deg);
}

.side-menu .body .body-menu .single-menu {
  margin-bottom: 1.5rem;
}

.side-menu .body .body-menu .single-menu .sub-menu {
  margin-top: 1rem;
  padding-left: 2rem;
  cursor: pointer;
  padding: 0.5rem 2rem;
}

.side-menu .body .body-menu .single-menu .sub-menu:hover {
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