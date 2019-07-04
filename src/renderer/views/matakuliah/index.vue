<template>
  <div class="app-container">
    <el-table border :data="tableData">
      <el-table-column min-width="50" type="index" label="No."></el-table-column>
      <el-table-column min-width="150" prop="nama"
                      label="Nama">
      </el-table-column>
      <el-table-column min-width="200" prop="nim"
                      label="NIM">
      </el-table-column>
      <el-table-column min-width="150" prop="gender"
                      label="L/P">
      </el-table-column>
      <el-table-column min-width="150" prop="agama"
                      label="Agama">
      </el-table-column>
      <el-table-column min-width="150" prop="tglahir"
                      label="Tanggal Lahir">
      </el-table-column>
      <el-table-column min-width="150" prop="prodi"
                      label="Program Studi">
      </el-table-column>
      <el-table-column min-width="150" prop="status"
                      label="Status">
      </el-table-column>
      <el-table-column min-width="150" prop="angkatan"
                      label="Angkatan">
      </el-table-column>
      <el-table-column min-width="150"
                      header-align="right"
                      label="Actions">
        <div slot-scope="{row}" class="text-right">
          <el-tooltip content="Info"
                      :open-delay="300"
                      placement="top">
            <p-button type="info" size="sm" icon>
              <i class="nc-icon nc-alert-circle-i"></i>
            </p-button>
          </el-tooltip>


          <el-tooltip content="Settings"
                      :open-delay="300"
                      placement="top">
            <p-button type="success" size="sm" icon>
              <i class="nc-icon nc-settings"></i>
            </p-button>
          </el-tooltip>

          <el-tooltip content="Delete"
                      :open-delay="300"
                      placement="top">
            <p-button type="danger" size="sm" icon>
              <i class="nc-icon nc-simple-delete"></i>
            </p-button>
          </el-tooltip>

        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      activeName: 'first',

      tableData: [{
        id: 1,
        nama: 'Luthfi Fachriza',
        nim: '18216027',
        gender: 'L',
        agama: 'Islam',
        tglahir: '28-01-1999',
        prodi: 'Sistem dan Teknologi Informasi',
        status: 'AKTIF',
        angkatan: '2016'
      }]
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = null
        this.listLoading = false
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
