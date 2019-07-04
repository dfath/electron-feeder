<template>
  <div class="app-container">
    <h1>Upload File Excel</h1>
    <el-row  type="flex" justify="center" >
      <el-col :span="24">
        <div class="grid-content">
          <el-row  type="flex" justify="end" >
            <el-col :span="6">
              <div>
                <el-button type="info">Download contoh file Excel</el-button>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <el-popover
                  placement="top"
                  width="160"
                  v-model="visible">
                  <p>Apakah Anda yakin untuk mengirimkan data ini?</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible = false">Tidak</el-button>
                    <el-button type="primary" size="mini" @click="visible = false">Ya</el-button>
                  </div>
                  <el-button type="success" slot="reference">Kirim ke Feeder PDDikti</el-button>
                </el-popover>
              </div>
            </el-col>
          </el-row>
      
      
        <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
        
        </div></el-col>
    </el-row>
    
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
    <div class="components-container">


      <!-- you can add element-ui's tooltip -->
      <el-tooltip placement="top" content="tooltip">
        <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
      </el-tooltip>
    </div>
  </div>
</template>


<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import BackToTop from '@/components/BackToTop'

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent, BackToTop },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      visible: false,

      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      }
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
  width: auto;
  text-align: center;
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
  .placeholder-container div {
  margin: 10px;
  }
</style>
