<template>
  <section class="overview">
    <base-container>
      <el-row>
        <el-col :span="12">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>Account</el-breadcrumb-item>
            <el-breadcrumb-item>Overview</el-breadcrumb-item>
          </el-breadcrumb>
          <h2>Overview</h2>
        </el-col>
        <el-col :span="12">
          <base-create-button>Create</base-create-button>
          <el-input v-model="search" class="w-50 m-2" :suffix-icon="Search" />
        </el-col>
      </el-row>
      <Table />
    </base-container>
  </section>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import Table from "../components/overview/Table.vue";

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
.overview .el-breadcrumb {
  font-size: 20px;
}

.overview .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.overview h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #005085;
}

.overview .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.overview .el-input {
  margin-left: 1rem;
}

.overview .el-input :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
</style>