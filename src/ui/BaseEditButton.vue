<template>
  <div class="edit-button">
    <el-button :icon="Edit"><slot></slot></el-button>
  </div>
</template>

<script>
import { Edit } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Edit,
    };
  },
};
</script>

<style scoped>
.edit-button {
  display: inline;
  margin-right: 0.5rem;
}

.edit-button .el-button {
  background: #39739a;
  border-radius: 4px;
  border-color: #39739a;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff;
}

.edit-button .el-button :deep(.el-icon) {
  color: white;
}
</style>