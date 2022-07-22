<template>
  <section class="account-edit">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>Account</el-breadcrumb-item>
        <el-breadcrumb-item>Overview</el-breadcrumb-item>
        <el-breadcrumb-item>Account Create</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create Account</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Profile</p>
              <p class="note">
                This information will be displayed publicly so be careful what
                you share
              </p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Chinese Name">
                <el-input
                  v-model="ruleForm.chineseName"
                  placeholder="Chinese Name"
                ></el-input>
              </el-form-item>
              <el-form-item label="English Name">
                <el-input
                  v-model="ruleForm.englishName"
                  placeholder="English Name"
                ></el-input>
              </el-form-item>
              <el-form-item label="Title">
                <el-input
                  v-model="ruleForm.title"
                  placeholder="Title"
                ></el-input>
              </el-form-item>
              <el-form-item label="Email">
                <el-input
                  v-model="ruleForm.email"
                  placeholder="Email"
                ></el-input>
              </el-form-item>
              <el-form-item label="Phone Number">
                <el-input
                  v-model="ruleForm.phoneNumber"
                  placeholder="Phone Number"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Change password</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Old Password">
                <el-input
                  v-model="ruleForm.password"
                  type="password"
                  placeholder="Old Password"
                ></el-input>
              </el-form-item>
              <el-form-item label="Password">
                <el-input
                  v-model="ruleForm.password"
                  type="password"
                  placeholder="Password"
                ></el-input>
              </el-form-item>
              <el-form-item label="Confirm Password">
                <el-input
                  v-model="ruleForm.confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Privilege</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Allowed groups">
                <el-select
                  v-model="ruleForm.allowedGroups"
                  multiple
                  placeholder="Select"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Exclude groups">
                <el-select
                  v-model="ruleForm.excludedGroups"
                  multiple
                  placeholder="Select"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Allowed items">
                <el-select
                  v-model="ruleForm.allowedItems"
                  multiple
                  placeholder="Select"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Exclude items">
                <el-select
                  v-model="ruleForm.excludedItems"
                  multiple
                  placeholder="Select"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
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
        chineseName: "陳大文",
        englishName: "Chan Tai Man",
        title: "Mr.",
        email: "chantaiman@gmail.com",
        phoneNumber: "6123 4567",
        password: "",
        confirmPassword: "",
        allowedGroups: ["manager"],
        excludedGroups: ["manager"],
        allowedItems: ["account"],
        excludedItems: ["account"],
      },
      options: [
        {
          value: "manager",
          label: "manager",
        },
        {
          value: "account",
          label: "account",
        },
      ],
    };
  },
};
</script>

<style scoped>
.account-edit .el-breadcrumb {
  font-size: 20px;
}

.account-edit .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.account-edit h2 {
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

.account-edit .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.account-edit .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.account-edit .card p.note {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #666666;
  margin-top: 0.5rem;
}

.account-edit .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.account-edit .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.account-edit .el-form .el-select {
  width: 100%;
}

.account-edit .create-button {
  text-align: end;
}
</style>