<template>
  <div class="app-container">
    <h1>Upload File Excel</h1>
    <el-row  type="flex" justify="center" >
  <el-col :span="24">
    <div class="grid-content bg-purple">
      <el-row  type="flex" justify="end" >
        <el-col :span="6">
          <div>
             <el-button type="info">Download contoh file Excel</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
             <el-button type="success">Kirim ke Feeder PDDikti</el-button>
          </div>
        </el-col>
      </el-row>
   
   
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    
    </div></el-col>
</el-row>
    
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>


<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    }
  }
}
</script>

<style scoped>
.el-button {
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: auto;
  margin-left: auto;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
