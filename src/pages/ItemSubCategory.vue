<template>
  <section class="item-sub-category">
    <base-container>
      <el-row>
        <el-col :span="12">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>CMS</el-breadcrumb-item>
            <el-breadcrumb-item>Item sub category</el-breadcrumb-item>
          </el-breadcrumb>
          <h2>Item sub category</h2>
        </el-col>
        <el-col :span="12">
          <base-create-button @click="$router.push('/item-sub-category-create')"
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
import Table from "../components/item-sub-category/Table.vue";

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
.item-sub-category .el-breadcrumb {
  font-size: 20px;
}

.item-sub-category .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.item-sub-category h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #005085;
}

.item-sub-category .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.item-sub-category .el-input {
  margin-left: 1rem;
}

.item-sub-category .el-input :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
</style>