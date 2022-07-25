<template>
  <section class="setting-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>CMS</el-breadcrumb-item>
        <el-breadcrumb-item>Setting</el-breadcrumb-item>
        <el-breadcrumb-item>Create setting</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create setting</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Setting</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Key">
                <el-input v-model="ruleForm.key" placeholder="Key"></el-input>
              </el-form-item>
              <el-form-item label="Value">
                <el-input
                  v-model="ruleForm.value"
                  placeholder="Value"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <base-create-button :hide-icon="true">Create</base-create-button>
      </el-form>
    </base-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        key: "",
        value: "",
      },
    };
  },
};
</script>

<style scoped>
.setting-create .el-breadcrumb {
  font-size: 20px;
}

.setting-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.setting-create h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #005085;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.setting-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.setting-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.setting-create .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.setting-create .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.setting-create .el-form .el-select {
  width: 100%;
}

.setting-create .create-button {
  text-align: end;
}
</style>