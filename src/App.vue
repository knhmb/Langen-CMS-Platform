<template>
  <el-row>
    <el-col
      v-if="$route.path !== '/login' && $route.path !== '/forgot-password'"
      :span="5"
    >
      <side-menu></side-menu>
    </el-col>
    <el-col
      :span="
        $route.path === '/login'
          ? 24
          : $route.path === '/forgot-password'
          ? 24
          : 19
      "
    >
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


