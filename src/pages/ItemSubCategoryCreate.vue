<template>
  <section class="item-sub-category-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>CMS</el-breadcrumb-item>
        <el-breadcrumb-item>Item sub category</el-breadcrumb-item>
        <el-breadcrumb-item>Create item sub category</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create item sub category</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Sub Category Information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Name">
                <el-input v-model="ruleForm.name" placeholder="Name"></el-input>
              </el-form-item>
              <el-form-item label="Parent">
                <el-select v-model="ruleForm.parent"></el-select>
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
      ruleForm: {
        name: "",
        parent: "",
      },
    };
  },
};
</script>

<style scoped>
.item-sub-category-create .el-breadcrumb {
  font-size: 20px;
}

.item-sub-category-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.item-sub-category-create h2 {
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

.item-sub-category-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.item-sub-category-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.item-sub-category-create .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.item-sub-category-create .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.item-sub-category-create .el-form .el-select {
  width: 100%;
}

.item-sub-category-create .create-button {
  text-align: end;
}

.item-sub-category-create
  :deep(.el-form-item.disable-flex .el-form-item__content) {
  display: block;
}
</style>