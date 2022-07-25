<template>
  <div class="setting-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="KEY" label="KEY" width="120" sortable />
      <el-table-column prop="VALUE" label="VALUE" width="170" sortable />
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
          KEY: "abcde-token",
          VALUE: "Value-1231239123123",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          KEY: "abcde-token",
          VALUE: "Value-1231239123123",
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
.setting-table {
  margin-top: 1.5rem;
}

.setting-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}

.setting-table .el-table :deep(.el-table__cell.is-leaf .cell) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.setting-table .el-table :deep(.el-table__cell .cell) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333;
}

.setting-table img {
  width: 100%;
}
</style>