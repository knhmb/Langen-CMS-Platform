<template>
  <section class="theme-category-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>CMS</el-breadcrumb-item>
        <el-breadcrumb-item>Theme category</el-breadcrumb-item>
        <el-breadcrumb-item>Create theme category</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create theme category</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Theme Category Information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Name">
                <el-input v-model="ruleForm.name" placeholder="Name"></el-input>
              </el-form-item>
              <el-form-item label="Image">
                <el-upload
                  class="avatar-uploader"
                  method="get"
                  action="#"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
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
import { Plus } from "@element-plus/icons-vue";

export default {
  components: {
    Plus,
  },
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        name: "",
        image: "",
      },
    };
  },
  methods: {
    handleAvatarSuccess(response, uploadFile) {
      this.imageUrl = URL.createObjectURL(uploadFile.raw);
      console.log(uploadFile);
      console.log(response);
      console.log(this.imageUrl);
    },
  },
};
</script>

<style scoped>
.theme-category-create .el-breadcrumb {
  font-size: 20px;
}

.theme-category-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.theme-category-create h2 {
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

.theme-category-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.theme-category-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.theme-category-create .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.theme-category-create .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.theme-category-create .create-button {
  text-align: end;
}

.theme-category-create :deep(.avatar-uploader .el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.theme-category-create :deep(.avatar-uploader .el-upload.el-upload--text) {
  width: 25rem;
  height: 10rem;
}

.theme-category-create :deep(.avatar-uploader .el-upload.el-upload--text img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.theme-category-create
  :deep(.el-form-item.disable-flex .el-form-item__content) {
  display: block;
}
</style>