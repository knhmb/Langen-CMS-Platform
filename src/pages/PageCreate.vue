<template>
  <section class="page-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>CMS</el-breadcrumb-item>
        <el-breadcrumb-item>Page</el-breadcrumb-item>
        <el-breadcrumb-item>Page Create</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create Page</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Page Information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Slug">
                <el-input v-model="ruleForm.slug" placeholder="Slug"></el-input>
              </el-form-item>
              <el-form-item label="Title">
                <el-input
                  v-model="ruleForm.title"
                  placeholder="Title"
                ></el-input>
              </el-form-item>
              <el-form-item label="Thumbnail">
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
              <el-form-item label="Content" class="disable-flex">
                <QuillEditor v-model="ruleForm.richText" theme="snow" />
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
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    Plus,
    QuillEditor,
  },
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        slug: "",
        title: "",
        richText: "",
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
.page-create .el-breadcrumb {
  font-size: 20px;
}

.page-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.page-create h2 {
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

.page-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.page-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.page-create .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.page-create .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.page-create .el-form .el-select {
  width: 100%;
}

.page-create .create-button {
  text-align: end;
}

.page-create :deep(.avatar-uploader .el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.page-create :deep(.avatar-uploader .el-upload.el-upload--text) {
  width: 25rem;
  height: 10rem;
}

.page-create :deep(.avatar-uploader .el-upload.el-upload--text img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.page-create :deep(.el-form-item.disable-flex .el-form-item__content) {
  display: block;
}

.page-create :deep(.el-form-item .ql-toolbar.ql-snow) {
  border-radius: 4px 4px 0 0;
}

.page-create :deep(.el-form-item .ql-container.ql-snow) {
  border-radius: 0 0 4px 4px;
  min-height: 15rem;
}
</style>