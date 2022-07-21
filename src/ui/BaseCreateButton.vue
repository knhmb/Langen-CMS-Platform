<template>
  <div class="create-button">
    <!-- <el-button :icon="Plus"><slot></slot></el-button> -->
    <el-button :icon="Plus"><slot></slot></el-button>
  </div>
</template>

<script>
import { Plus } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      Plus,
    };
  },
};
</script>

<style scoped>
.create-button {
  position: relative;
}

.create-button .el-button {
  background: #005085;
  border-radius: 4px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding: 1.4rem 1rem;
}

.create-button .el-button :deep(.el-icon) {
  color: #fff;
}
</style>