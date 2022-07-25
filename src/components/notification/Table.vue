<template>
  <div class="Notification-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="TYPE" label="TYPE" width="200" sortable />
      <el-table-column prop="CONTENT" label="EMAIL" width="630" sortable />
      <el-table-column
        prop="RECEIVED AT"
        label="RECEIVED AT"
        width="160"
        sortable
      />
      <el-table-column label="OPERATIONS" width="230">
        <template #default="scope">
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
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          TYPE: "Reservation order ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "New comments & rating ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "Reservation order ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "New comments & rating ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "Reservation order ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "New comments & rating ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "Reservation order ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "New comments & rating ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "Reservation order ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
        {
          TYPE: "New comments & rating ",
          CONTENT:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ridiculus est vel elit quam.",
          "RECEIVED AT": "2022-03-02 12:15:41",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Notification-table {
  margin-top: 1.5rem;
}

.Notification-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}

.Notification-table .el-table :deep(.el-table__cell.is-leaf .cell) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Notification-table .el-table :deep(.el-table__cell .cell) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333;
}

.Notification-table .el-pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.Notification-table .el-pagination :deep(.btn-prev),
.Notification-table .el-pagination :deep(.number),
.Notification-table .el-pagination :deep(.btn-next),
.Notification-table .el-pagination :deep(.btn-quicknext) {
  border-radius: 100%;
}

.Notification-table
  :deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background: #005085;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #ffffff;
}
</style>