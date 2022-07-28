<template>
  <section class="forgot-password">
    <div class="forgot-password-card">
      <div @click="$router.push('/login')" class="return">
        <img src="../assets/arrow@2x.png" alt="" />
        <p class="back">Back</p>
      </div>
      <p class="forgot-password-text">Forgot password?</p>
      <p class="note">
        Please enter your registered e-mail address, we will get back to you
        with the reset password link and confirmation OTP.
      </p>
      <el-form label-position="top">
        <el-form-item label="Your email">
          <el-input placeholder="Your email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>Reset password</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>


<style scoped>
.forgot-password {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafbfc;
}

.forgot-password-card {
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 1rem;
  width: 25rem;
}

.forgot-password-card h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "liga" off;
  color: #005085;
  margin-bottom: 1rem;
}

.forgot-password-card .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.forgot-password-card .el-form :deep(.el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.3rem 0.7rem;
}

.forgot-password-card .el-form .el-button {
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

.forgot-password .return {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
  width: fit-content;
}

.forgot-password p.back {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.forgot-password p.forgot-password-text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.5rem;
}

.forgot-password p.note {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 1rem;
}

.forgot-password img {
  transform: rotateZ(90deg);
  width: 1.5rem;
}
</style>