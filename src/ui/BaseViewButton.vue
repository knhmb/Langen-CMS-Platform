<template>
  <div class="view-button">
    <el-button :icon="View"><slot></slot></el-button>
  </div>
</template>

<script>
import { View } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      View,
    };
  },
};
</script>

<style scoped>
.view-button {
  display: inline;
  margin-right: 0.5rem;
}

.view-button .el-button {
  background: #2bb392;
  border-radius: 4px;
  border-color: #2bb392;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #ffffff;
}

.view-button .el-button :deep(.el-icon) {
  color: white;
}
</style>