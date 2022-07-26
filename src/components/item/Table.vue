<template>
  <div class="item-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="NAME" label="NAME" width="220" sortable />
      <el-table-column prop="QUANTITY" label="QUANTITY" width="150" sortable />
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
      <el-table-column
        prop="CREATED BY"
        label="CREATED BY"
        width="150"
        sortable
      />
      <el-table-column
        prop="CREATED AT"
        label="CREATED AT"
        width="170"
        sortable
      />
      <el-table-column
        prop="UPDATED BY"
        label="UPDATED BY"
        width="150"
        sortable
      />
      <el-table-column
        prop="UPDATED AT"
        label="UPDATED AT"
        width="160"
        sortable
      />
      <el-table-column label="OPERATIONS" width="230">
        <template #default="scope">
          <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          > -->
          <base-edit-button>Edit</base-edit-button>
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
          NAME: "ABCDE Hotel",
          QUANTITY: "1",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "ABCDE Hotel",
          QUANTITY: "5",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "ABCDE Hotel",
          QUANTITY: "1",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "ABCDE Hotel",
          QUANTITY: "5",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "ABCDE Hotel",
          QUANTITY: "1",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "ABCDE Hotel",
          QUANTITY: "5",
          "MAIN CATEGORY": "Main category name",
          "SUB CATEGORY": "Sub category name",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
      ],
    };
  },
};
</script>

<style scoped>
.item-table {
  margin-top: 1.5rem;
}

.item-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}

.item-table .el-table :deep(.el-table__cell.is-leaf .cell) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-table .el-table :deep(.el-table__cell .cell) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333;
}

.item-table .main-category-box {
  background: #ededfc;
  border: 1px solid #dcdafa;
  border-radius: 4px;
  padding: 0.5rem;
  color: #4f46e5;
}
.item-table .sub-category-box {
  background: #ffebd4;
  border: 1px solid #ffd7a9;
  border-radius: 4px;
  color: #ff7625;
  padding: 0.5rem;
}
</style>