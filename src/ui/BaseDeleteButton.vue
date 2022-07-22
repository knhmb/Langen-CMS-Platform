<template>
  <div class="delete-button">
    <el-button :icon="Delete"><slot></slot></el-button>
  </div>
</template>

<script>
import { Delete } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Delete,
    };
  },
};
</script>

<style scoped>
.delete-button {
  display: inline;
  margin-right: 0.5rem;
}

.delete-button .el-button {
  background: #ee5858;
  border-radius: 4px;
  border-color: #ee5858;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff;
}

.delete-button .el-button :deep(.el-icon) {
  color: white;
}
</style>