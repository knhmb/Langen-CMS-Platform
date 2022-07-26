<template>
  <div class="reservation-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        prop="ORDER NUMBER"
        label="ORDER NUMBER"
        width="180"
        sortable
      />
      <el-table-column
        prop="MAIN CATEGORY"
        label="MAIN CATEGORY"
        width="190"
        sortable
      >
        <template #default="scope">
          <div class="main-category-box">
            {{ scope.row["MAIN CATEGORY"] }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="SUB CATEGORY"
        label="SUB CATEGORY"
        width="190"
        sortable
      >
        <template #default="scope">
          <div class="sub-category-box">
            {{ scope.row["SUB CATEGORY"] }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="HOTEL" label="HOTEL" width="150" sortable />
      <el-table-column
        prop="TOTAL PRICE"
        label="TOTAL PRICE"
        width="170"
        sortable
      />
      <el-table-column
        prop="TOTAL GUEST"
        label="TOTAL GUEST"
        width="150"
        sortable
      />
      <el-table-column
        prop="ORDER STATUS"
        label="ORDER STATUS"
        width="160"
        sortable
      >
        <template #default="scope">
          <div
            :class="{
              'pill-paid': scope.row['ORDER STATUS'] === 'Paid',
              'pill-cancelled': scope.row['ORDER STATUS'] === 'Cancelled',
              'pill-pending': scope.row['ORDER STATUS'] === 'Pending',
            }"
          >
            {{ scope.row["ORDER STATUS"] }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="OPERATIONS" width="230">
        <template #default="scope">
          <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          > -->
          <base-view-button @click="$router.push('/reservation-detail')"
            >Detail</base-view-button
          >
          <base-delete-button @click="handleEdit(scope.$index, scope.row)"
            >Delete</base-delete-button
          >
          <!-- <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Paid",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Cancelled",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Pending",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Cancelled",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Paid",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Cancelled",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Pending",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Cancelled",
        },
        {
          "ORDER NUMBER": "87654321",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          HOTEL: "ABCDE Hotel",
          "TOTAL PRICE": "HKD 1200",
          "TOTAL GUEST": "4",
          "ORDER STATUS": "Pending",
        },
      ],
    };
  },
};
</script>

<style scoped>
.reservation-table {
  margin-top: 1.5rem;
}

.reservation-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}

.reservation-table .el-table :deep(.el-table__cell.is-leaf .cell) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reservation-table .el-table :deep(.el-table__cell .cell) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333;
}

.reservation-table .main-category-box {
  background: #ededfc;
  border: 1px solid #dcdafa;
  border-radius: 4px;
  padding: 0.5rem;
  color: #4f46e5;
}

.reservation-table .sub-category-box {
  background: #ffebd4;
  border: 1px solid #ffd7a9;
  border-radius: 4px;
  padding: 0.5rem;
  color: #ff7625;
}

.reservation-table .pill-paid {
  background: rgba(43, 178, 146, 0.16);
  border-radius: 16px;
  padding: 0.3rem;
  color: #2bb292;
  text-align: center;
}

.reservation-table .pill-cancelled {
  background: rgba(238, 88, 88, 0.16);
  border-radius: 16px;
  padding: 0.3rem;
  text-align: center;
  color: #ee5858;
}

.reservation-table .pill-pending {
  background: rgba(242, 150, 12, 0.16);
  border-radius: 16px;
  padding: 0.3rem;
  text-align: center;
  color: #f2960c;
}
</style>