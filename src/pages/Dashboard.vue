<template>
  <section class="dashboard">
    <base-container>
      <h2>Dashboard</h2>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="card">
            <img src="../assets/dashboard-active-account@2x.png" alt="" />
            <p>Active member</p>
            <p>21</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <img src="../assets/dashboard-active-vendor@2x.png" alt="" />
            <p>Active vendor (Merchant)</p>
            <p>21</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <img src="../assets/dashboard-reservations-create@2x.png" alt="" />
            <p>Total reservations created</p>
            <p>21</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <img
              src="../assets/dashboard-daily-reservations-made@2x.png"
              alt=""
            />
            <p>Daily reservations made</p>
            <p>21</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card">
            <img src="../assets/dashboard-most-reserved-hotel@2x.png" alt="" />
            <p>Most reserved hotel</p>
            <p>Hotel Name</p>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.dashboard {
  background: #fafbfc;
}

.dashboard h2 {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  font-feature-settings: "liga" off;
  color: #005085;
  margin-bottom: 2rem;
}

.dashboard .card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(81, 97, 122, 0.08),
    inset 0px 0px 0px 1px #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.3rem;
}

.dashboard .card img {
  width: 5rem;
}

.dashboard .card p:first-of-type {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: #333333;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.dashboard .card p:nth-of-type(2) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  font-feature-settings: "liga" off;
  color: #333333;
}
</style>