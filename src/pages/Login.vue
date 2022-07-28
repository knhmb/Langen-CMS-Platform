<template>
  <section class="login">
    <div class="login-card">
      <h3>CMS Platform</h3>
      <el-form label-position="top">
        <el-form-item label="Username">
          <el-input placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input placeholder="Password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <p @click="$router.push('/forgot-password')" class="forgot-password">
            Forgot password?
          </p>
        </el-form-item>
        <el-form-item>
          <el-button>Sign in</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>


<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafbfc;
}

.login-card {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 1rem;
  width: 25rem;
}

.login-card h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "liga" off;
  color: #005085;
  margin-bottom: 1rem;
}

.login-card .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.login-card .el-form :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
}

.login-card .el-form .el-button {
  background: #005085;
  border-radius: 4px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #ffffff;
  width: 100%;
  padding: 1.3rem;
}

.login-card .el-form p.forgot-password {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  cursor: pointer;
  text-align: end;
  width: 100%;
}
</style>