<template>
  <section class="banner-slideshow">
    <base-container>
      <el-row>
        <el-col :span="12">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>CMS</el-breadcrumb-item>
            <el-breadcrumb-item>Banner slideshow</el-breadcrumb-item>
          </el-breadcrumb>
          <h2>Banner slideshow</h2>
        </el-col>
        <el-col :span="12">
          <base-create-button @click="$router.push('/banner-slideshow-create')"
            >Create</base-create-button
          >
          <el-input
            placeholder="Search"
            v-model="search"
            class="w-50 m-2"
            :suffix-icon="Search"
          />
        </el-col>
      </el-row>
      <Table />
    </base-container>
  </section>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import Table from "../components/banner-slideshow/Table.vue";

export default {
  components: {
    Table,
  },
  data() {
    return {
      Search,
      search: "",
    };
  },
};
</script>

<style scoped>
.banner-slideshow .el-breadcrumb {
  font-size: 20px;
}

.banner-slideshow .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.banner-slideshow h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #005085;
}

.banner-slideshow .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.banner-slideshow .el-input {
  margin-left: 1rem;
}

.banner-slideshow .el-input :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
</style>