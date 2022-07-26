<template>
  <div class="comment-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="HOTEL" label="HOTEL" width="180" sortable />
      <el-table-column prop="CONTENT" label="CONTENT" width="550" sortable />
      <el-table-column prop="RATING" label="RATING" width="130" sortable />
      <el-table-column
        prop="COMMENT BY"
        label="COMMENT BY"
        width="150"
        sortable
      />
      <el-table-column
        prop="COMMENT AT"
        label="COMMENT AT"
        width="160"
        sortable
      />
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
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
        {
          HOTEL: "ABCDE Hotel",
          CONTENT:
            "Comment content : Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed hendrerit fringilla aliquam neque",
          RATING: "4",
          "COMMENT BY": "Chan tai man",
          "COMMENT AT": "2022-03-02 12:15:41",
        },
      ],
    };
  },
};
</script>

<style scoped>
.comment-table {
  margin-top: 1.5rem;
}

.comment-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}

.comment-table .el-table :deep(.el-table__cell.is-leaf .cell) {
  display: flex;
  align-comments: center;
  justify-content: space-between;
}

.comment-table .el-table :deep(.el-table__cell .cell) {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: #333;
}

.comment-table .main-category-box {
  background: #ededfc;
  border: 1px solid #dcdafa;
  border-radius: 4px;
  padding: 0.5rem;
  color: #4f46e5;
}
.comment-table .sub-category-box {
  background: #ffebd4;
  border: 1px solid #ffd7a9;
  border-radius: 4px;
  color: #ff7625;
  padding: 0.5rem;
}

.comment-table .el-pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.comment-table .el-pagination :deep(.btn-prev),
.comment-table .el-pagination :deep(.number),
.comment-table .el-pagination :deep(.btn-next),
.comment-table .el-pagination :deep(.btn-quicknext) {
  border-radius: 100%;
}

.comment-table
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