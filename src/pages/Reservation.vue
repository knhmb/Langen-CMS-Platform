<template>
  <section class="reservation">
    <base-container>
      <el-row>
        <el-col :span="12">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>Hotel</el-breadcrumb-item>
            <el-breadcrumb-item>Reservation</el-breadcrumb-item>
          </el-breadcrumb>
          <h2>Reservation</h2>
        </el-col>
        <el-col :span="12">
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
import Table from "../components/reservation/Table.vue";

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
.reservation .el-breadcrumb {
  font-size: 20px;
}

.reservation .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.reservation h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #005085;
}

.reservation .el-col:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.reservation .el-input {
  margin-left: 1rem;
}

.reservation .el-input :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
</style>