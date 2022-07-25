<template>
  <div class="amenity-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="NAME" label="NAME" width="120" sortable />
      <el-table-column prop="FREE" label="FREE" width="120" sortable />
      <el-table-column
        prop="ADDITIONAL CHANGE"
        label="ADDITIONAL CHANGE"
        width="210"
        sortable
      />

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
          NAME: "Wi-Fi",
          FREE: "YES",
          "ADDITIONAL CHANGE": "",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "Shower gel",
          FREE: "Yes",
          "ADDITIONAL CHANGE": "",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          NAME: "Towel",
          FREE: "No",
          "ADDITIONAL CHANGE": "HKD 10.00",
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
.amenity-table {
  margin-top: 1.5rem;
}

.amenity-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}

.amenity-table .el-table :deep(.el-table__cell.is-leaf .cell) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.amenity-table .el-table :deep(.el-table__cell .cell) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333;
}

.amenity-table img {
  width: 100%;
}
</style>