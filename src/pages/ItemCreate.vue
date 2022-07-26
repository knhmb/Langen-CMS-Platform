<template>
  <section class="item-create">
    <base-container>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>Hotel</el-breadcrumb-item>
        <el-breadcrumb-item>Item</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>Create item</h2>
      <el-form label-position="top">
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Hotel detail</p>
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
              <el-form-item class="quantity-item" label="Quantity">
                <el-input-number v-model="ruleForm.quantity" :min="1" />
                <p class="quantity-note">
                  Set <span>1</span> for holiday house / Set <span>1</span> to N
                  for hotel house
                </p>
              </el-form-item>
              <el-form-item label="Special notice (Optional)">
                <el-input
                  v-model="ruleForm.specialNotice"
                  placeholder="Special notice"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Choose item category</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Main category">
                <el-select v-model="ruleForm.mainCategory"></el-select>
              </el-form-item>
              <el-form-item label="Sub category">
                <el-select v-model="ruleForm.subCategory"></el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Basic information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Location">
                <el-input v-model="ruleForm.location" placeholder="Location">
                </el-input>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="Service type">
                    <el-input
                      v-model="ruleForm.serviceType"
                      placeholder="Service type"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Room type">
                    <el-input
                      v-model="ruleForm.roomType"
                      placeholder="Room type"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Size (Square foot)">
                    <el-input
                      v-model="ruleForm.size"
                      placeholder="Size"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="Maximum guests">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="Adult">
                      <el-input-number
                        v-model="ruleForm.adultQuantity"
                        :min="0"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="Kid">
                      <el-input-number
                        v-model="ruleForm.kidQuantity"
                        :min="0"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="Pet">
                      <el-input-number
                        v-model="ruleForm.petQuantity"
                        :min="0"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="Floor number">
                    <el-input
                      v-model="ruleForm.floorNumber"
                      placeholder="Floor number"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="View">
                    <el-input
                      v-model="ruleForm.view"
                      placeholder="View"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="Floor number">
                <el-input placeholder="Floor number"></el-input>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="Check-in time">
                    <el-time-picker
                      v-model="ruleForm.checkInTime"
                      placeholder="Check-in time"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Check-out time">
                    <el-time-picker
                      v-model="ruleForm.checkOutTime"
                      placeholder="Check-out time"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="Price (HKD)">
                    <el-input v-model="ruleForm.price" placeholder="Price" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Discount">
                    <el-input
                      v-model="ruleForm.discount"
                      placeholder="Discount"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Detail information</p>
            </el-col>
            <el-col :span="17">
              <el-form-item label="Stay information">
                <el-input
                  v-model="ruleForm.stayInformation"
                  placeholder="Location"
                ></el-input>
              </el-form-item>
              <el-form-item label="Amenity (free)">
                <el-checkbox-group v-model="ruleForm.amenityFree">
                  <div class="items">
                    <el-checkbox label="Item Name1" />
                    <el-checkbox label="Item Name2" />
                  </div>
                  <div class="items">
                    <el-checkbox label="Item Name3" />
                    <el-checkbox label="Item Name4" />
                  </div>
                  <div class="items">
                    <el-checkbox label="Item Name5" />
                    <el-checkbox label="Item Name6" />
                  </div>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="Amenity (free)">
                <el-checkbox-group v-model="ruleForm.amenityFree">
                  <div class="items">
                    <el-checkbox label="Item Name1 (HKD 10.00)" />
                    <el-checkbox label="Item Name2 (HKD 10.00)" />
                  </div>
                  <div class="items">
                    <el-checkbox label="Item Name3 (HKD 10.00)" />
                    <el-checkbox label="Item Name4 (HKD 10.00)" />
                  </div>
                  <div class="items">
                    <el-checkbox label="Item Name5 (HKD 10.00)" />
                    <el-checkbox label="Item Name6 (HKD 10.00)" />
                  </div>
                </el-checkbox-group>
              </el-form-item>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="Bed type">
                    <el-select
                      v-model="ruleForm.bedType"
                      placeholder="Bed type"
                    ></el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Bed quantity">
                    <el-input
                      v-model="ruleForm.bedQuantity"
                      placeholder="Bed quantity"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="Things to note" class="disable-flex">
                <QuillEditor v-model="ruleForm.thingsToNote" theme="snow" />
              </el-form-item>
              <el-form-item label="Cancel policy" class="disable-flex">
                <QuillEditor v-model="ruleForm.cancelPolicy" theme="snow" />
              </el-form-item>
              <el-form-item
                label="Bad weather arrangement"
                class="disable-flex"
              >
                <QuillEditor
                  v-model="ruleForm.badWeatherArrangement"
                  theme="snow"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="card">
          <el-row :gutter="13">
            <el-col :span="7">
              <p class="title">Booking time slot</p>
            </el-col>
            <el-col :span="17">
              <div class="inner-card">
                <div class="header">
                  <p>Time slot 1</p>
                  <p class="remove">Remove</p>
                </div>
                <div class="body">
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <el-form-item label="Date">
                        <el-date-picker
                          v-model="ruleForm.date"
                          type="date"
                          placeholder="Date"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="Start time from">
                        <el-time-picker
                          v-model="ruleForm.startTime"
                          placeholder="Start time from"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="End time from">
                        <el-time-picker
                          v-model="ruleForm.endTime"
                          placeholder="End time from"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="8">
                      <el-form-item label="Price (HKD)">
                        <el-input
                          v-model="ruleForm.bookingPrice"
                          placeholder="Price"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="Discount">
                        <el-input
                          v-model="ruleForm.bookingDiscount"
                          placeholder="Discount"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="No. of slot capacity">
                        <el-input
                          v-model="ruleForm.numberOfSlotCapacity"
                          placeholder="No. of slot capacity"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
                <div class="footer">
                  <el-form-item label="Status">
                    <el-select v-model="ruleForm.status"></el-select>
                  </el-form-item>
                </div>
              </div>
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
        name: "",
        quantity: "",
        specialNotice: "",
        mainCategory: "",
        subCategory: "",
        serviceType: "",
        roomType: "",
        size: "",
        adultQuantity: 0,
        kidQuantity: 0,
        petQuantity: 0,
        floorNumber: "",
        view: "",
        checkInTime: "",
        checkOutTime: "",
        price: "",
        discount: "",
        amenityFree: [],
        bedType: "",
        bedQuantity: "",
        thingsToNote: "",
        cancelPolicy: "",
        badWeatherArrangement: "",
        date: "",
        startTime: "",
        endTime: "",
        bookingPrice: "",
        bookingDiscount: "",
        numberOfSlotCapacity: "",
        status: "Available",
      },
    };
  },
};
</script>

<style scoped>
.item-create .el-breadcrumb {
  font-size: 20px;
}

.item-create .el-breadcrumb :deep(.el-breadcrumb__inner) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #8898a9;
}

.item-create h2 {
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

.item-create .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.item-create .card p.title {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.item-create .card p.note {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #666666;
  margin-top: 0.5rem;
}

.item-create .el-form :deep(.el-form-item__label),
.item-create .el-form :deep(.el-checkbox-group .el-checkbox__label) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-bottom: 0.3rem;
}

.item-create .el-form :deep(.el-input .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 0.2rem 0.7rem;
}

.item-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--time.el-tooltip__trigger.el-tooltip__trigger) {
  width: 100%;
}

.item-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--time.el-tooltip__trigger.el-tooltip__trigger
    .el-input__wrapper),
.item-create
  .el-form
  :deep(.el-input.el-input--prefix.el-input--suffix.el-date-editor.el-date-editor--date.el-tooltip__trigger.el-tooltip__trigger
    .el-input__wrapper) {
  background: #ffffff;
  border-radius: 4px;
  padding: 1.1rem 0.7rem;
}

.item-create :deep(.avatar-uploader .el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.item-create :deep(.avatar-uploader .el-upload.el-upload--text) {
  width: 25rem;
  height: 10rem;
}

.item-create :deep(.avatar-uploader .el-upload.el-upload--text img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-create :deep(.quantity-item .el-form-item__content) {
  flex-direction: column;
  align-items: flex-start;
}

.item-create p.quantity-note {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: rgba(51, 51, 51, 0.6);
  margin-top: 0.5rem;
}
.item-create p.quantity-note span {
  color: #005085;
}

.item-create .el-form .el-select {
  width: 100%;
}

.item-create .create-button {
  text-align: end;
}

.item-create .items {
  display: flex;
  flex-direction: column;
}

.item-create .el-checkbox-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.item-create :deep(.el-form-item.disable-flex .el-form-item__content) {
  display: block;
}

.item-create .inner-card {
  background: #ffffff;
  border: 1px solid #cad1d7;
  border-radius: 8px;
}

.item-create .inner-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #cad1d7;
}

.item-create .inner-card .header p {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333333;
}

.item-create .inner-card .header p.remove {
  color: #ee5858;
}

.item-create .inner-card .body {
  padding: 1rem;
  border-bottom: 1px solid #cad1d7;
}

.item-create .inner-card .footer {
  padding: 1rem;
}
</style>