<template>
  <div class="overview-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="USERNAME" label="USERNAME" width="120" />
      <el-table-column prop="EMAIL" label="EMAIL" width="170" />
      <el-table-column prop="CREATED BY" label="CREATED BY" width="120" />
      <el-table-column prop="CREATED AT" label="CREATED AT" width="170" />
      <el-table-column prop="UPDATED BY" label="UPDATED BY" width="120" />
      <el-table-column prop="UPDATED AT" label="UPDATED AT" width="160" />
      <el-table-column label="OPERATIONS" width="180">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
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
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
          "CREATED BY": "Chris Wong",
          "CREATED AT": "2022-03-02 12:15:41",
          "UPDATED BY": "Chris Wong",
          "UPDATED AT": "2022-03-02 12:15:41",
        },
        {
          USERNAME: "chan tai man",
          EMAIL: "chantaiman@gmail.com",
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
.overview-table {
  margin-top: 1.5rem;
}

.overview-table .el-table :deep(.el-table__cell.is-leaf) {
  background: #f2f5f8;
}
</style>