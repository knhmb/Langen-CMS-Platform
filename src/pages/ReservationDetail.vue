<template>
  <section class="reservation-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>Hotel</el-breadcrumb-item>
        <el-breadcrumb-item>Reservation</el-breadcrumb-item>
        <el-breadcrumb-item>Reservation detail</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Reservation detail</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Order Information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Order number">
                <el-input
                  v-model="ruleForm.orderNumber"
                  placeholder="Order number"
                ></el-input>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="Hotel name">
                    <el-input
                      v-model="ruleForm.hotelName"
                      placeholder="Hotel name"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Room quantity">
                    <el-input
                      v-model="ruleForm.roomQuantity"
                      placeholder="Room quantity"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row class="row-border" :gutter="20">
                <el-col :span="8">
                  <el-form-item label="Check in date">
                    <el-date-picker
                      type="date"
                      v-model="ruleForm.checkInDate"
                      placeholder="Check in date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Check out date">
                    <el-date-picker
                      type="date"
                      v-model="ruleForm.checkOutDate"
                      placeholder="Check out date"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Total night">
                    <el-input
                      v-model="ruleForm.totalNights"
                      placeholder="Total nights"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="Adult quantity">
                    <el-input v-model="ruleForm.adultQuantity"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Children quantity">
                    <el-input v-model="ruleForm.childrenQuantity"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Pet quantity">
                    <el-input v-model="ruleForm.petQuantity"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="Special request">
                <el-input
                  type="textarea"
                  v-model="ruleForm.specialRequest"
                  rows="5"
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
        orderNumber: "87654321",
        hotelName: "ABCDE Hotel",
        roomQuantity: "2",
        checkInDate: "2022-05-05",
        checkOutDate: "2022-05-08",
        totalNights: "3",
        adultQuantity: "2",
        childrenQuantity: "2",
        petQuantity: "0",
        specialRequest:
          "Special requests content lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien in diam lobortis et, amet tristique. Sed proin adipiscing vitae vitae amet, dictum elementum id posuere. Ultrices ullamcorper dui commodo quam diam lectus. Fames ut sit orci, morbi suspendisse varius.",
      },
    };
  },
};
</script>

<style scoped>
.reservation-create .el-breadcrumb {
  font-size: 20px;
}

.reservation-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.reservation-create h2 {
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

.reservation-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.reservation-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.reservation-create .el-form :deep(.el-form-item__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.reservation-create .el-form :deep(.el-input .el-input__wrapper) {
  /* background: #ffffff; */
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
  background: #f5f7fa;
}

.reservation-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.el-tooltip__trigger.el-tooltip__trigger) {
  width: 100%;
}

.reservation-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.el-tooltip__trigger.el-tooltip__trigger
    .el-input__wrapper) {
  /* background: #ffffff; */
  border-radius: 4px;
  padding: 1.14rem 0.7rem;
  background: #f5f7fa;
}

.reservation-create .el-form .el-select {
  width: 100%;
}

.reservation-create .create-button {
  text-align: end;
}

.reservation-create .row-border {
  border-bottom: 1px solid #cad1d7;
}

.reservation-create .el-row.row-border + .el-row {
  padding-top: 0.7rem;
}

.reservation-create :deep(.el-textarea .el-textarea__inner) {
  background: #f5f7fa;
}
</style>