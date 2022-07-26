<template>
  <section class="coupon-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>Hotel</el-breadcrumb-item>
        <el-breadcrumb-item>Coupon</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create coupon</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Coupon Information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Name">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="Title"
                ></el-input>
              </el-form-item>
              <el-form-item label="Coupon code">
                <el-input
                  v-model="ruleForm.couponCode"
                  placeholder="Coupon code"
                ></el-input>
              </el-form-item>
              <el-form-item class="coupon-section" label="Coupon type">
                <div class="coupon-content">
                  <el-checkbox label="Fix amount discount"></el-checkbox>
                  <div class="input-content">
                    <el-input
                      v-model="ruleForm.fixedDiscountAmount"
                      placeholder="Amount"
                    ></el-input>
                    <p>HKD</p>
                  </div>
                </div>
                <div class="coupon-content">
                  <el-checkbox label="Percentage discount"></el-checkbox>
                  <div class="input-content">
                    <el-input
                      v-model="ruleForm.percentageDiscount"
                      placeholder="Amount"
                    ></el-input>
                    <p>%</p>
                  </div>
                </div>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="Start Date">
                    <el-date-picker
                      v-model="ruleForm.startDate"
                      type="date"
                      placeholder="Start date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="End Date">
                    <el-date-picker
                      v-model="ruleForm.endDate"
                      type="date"
                      placeholder="End date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
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
        name: "",
        couponCode: "",
        fixedDiscountAmount: "",
        percentageDiscount: "",
        startDate: "",
        endDate: "",
      },
    };
  },
};
</script>

<style scoped>
.coupon-create .el-breadcrumb {
  font-size: 20px;
}

.coupon-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.coupon-create h2 {
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

.coupon-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.coupon-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.coupon-create .el-form :deep(.el-form-item__label),
.coupon-create .el-form :deep(.el-checkbox .el-checkbox__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.coupon-create .el-form :deep(.el-checkbox .el-checkbox__label) {
  margin-bottom: 0;
}
.coupon-create .el-form :deep(.el-checkbox .el-checkbox__inner) {
  border-radius: 100%;
}
.coupon-create .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.coupon-create .el-form .el-select {
  width: 100%;
}

.coupon-create .create-button {
  text-align: end;
}

.coupon-create .coupon-section .coupon-content {
  display: flex;
}

.coupon-create .coupon-section .input-content {
  position: relative;
  margin-left: 1.5rem;
}

.coupon-create .coupon-section .input-content p {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.coupon-create .coupon-section :deep(.el-form-item__content) {
  justify-content: space-between;
}

.coupon-create .coupon-section :deep(.el-input) {
  width: 9rem;
}

.coupon-create .coupon-section :deep(.el-input .el-input__wrapper) {
  padding-right: 3rem;
}

.coupon-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.el-tooltip__trigger.el-tooltip__trigger) {
  width: 100%;
}

.coupon-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.el-tooltip__trigger.el-tooltip__trigger
    .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 1.1rem 0.7rem;
}
</style>