<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Dosen" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
        Search
        </el-button>
      </el-col>
    </el-row>

    <el-table 
      size=mini 
      v-loading="listLoading" 
      border 
      stripe
      :data="tablelistDosen" 
      :cell-style="{padding: '0px', height: '37px'}"
    >
      <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column 
        min-width="200" 
        prop="nama_dosen"
        label="Nama"
      >
      </el-table-column>
      <el-table-column 
        min-width="125" 
        prop="nidn"
        label="NIDN/NUP/NIDK"
      >
      </el-table-column>
      <el-table-column 
        min-width="50" 
        prop="jenis_kelamin"
        label="L/P"
        :filters="filterJenisKelamin"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="100" 
        prop="nama_agama"
        label="Agama"
        :filters="filterAgama"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="100" 
        prop="tanggal_lahir"
        label="Tanggal Lahir"
      >
      </el-table-column>
      <el-table-column 
        min-width="50" 
        prop="nama_status_aktif"
        label="Status"
        :filters="filterStatus"
        :filter-method="filterHandler"  
      >
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"  />

  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
// import { Message, MessageBox } from 'element-ui'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeName: 'first',
      tableKey: 0,
      list: null,
      listDosen: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null
      },
      filterJenisKelamin: [
        { text: 'Laki-laki', value: 'L' },
        { text: 'Perempuan', value: 'P' }
      ],
      filterStatus: [
        { text: 'Aktif', value: 'Aktif' },
        { text: 'Tidak Aktif', value: 'Tidak Aktif' },
        { text: 'CUTI', value: 'CUTI' },
        { text: 'KELUAR', value: 'KELUAR' },
        { text: 'ALMARHUM', value: 'ALMARHUM' },
        { text: 'PENSIUN', value: 'PENSIUN' },
        { text: 'IZIN BELAJAR', value: 'IZIN BELAJAR' },
        { text: 'TUGAS DI INSTANSI LAIN', value: 'TUGAS DI INSTANSI LAIN' },
        { text: 'GANTI NIDN', value: 'GANTI NIDN' },
        { text: 'TUGAS BELAJAR', value: 'TUGAS BELAJAR' },
        { text: 'HAPUS NIDN', value: 'HAPUS NIDN' },
        { text: 'Lainnya', value: 'Lainnya' }
      ],
      filterAgama: [
        { text: 'Islam', value: 'Islam' },
        { text: 'Kristen', value: 'Kristen' },
        { text: 'Katholik', value: 'Katholik' },
        { text: 'Hindu', value: 'Hindu' },
        { text: 'Budha', value: 'Budha' },
        { text: 'Konghucu', value: 'Konghucu' },
        { text: 'Tidak diisi', value: 'Tidak diisi' },
        { text: 'Lainnya', value: 'Lainnya' }
      ],
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistDosen() {
      return this.$store.getters.listDosen
    }
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    fetchData() {
      this.getData()
    },
    getData() {
      if (this.total === 0) {
        this.getTotal()
      }
      this.listLoading = true
      this.$store.dispatch('GetListDosen', this.listQuery).then(() => {
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    indexMethod(index) {
      if (this.listQuery.page > 1) {
        return index + 1 + (this.listQuery.limit * (this.listQuery.page - 1))
      } else {
        return index + 1
      }
    },
    getTotal() {
      this.$store.dispatch('GetTotalDosen', '').then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalDosen
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    // handleDelete(row) {
    //   this.$notify({
    //     title: 'Success',
    //     message: 'Delete Successfully',
    //     type: 'success',
    //     duration: 2000
    //   })
    //   const index = this.list.indexOf(row)
    //   this.list.splice(index, 1)
    // },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>