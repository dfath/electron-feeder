<template>
  <div class="app-container">
    <el-row type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Dosen" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
        Search
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" border :data="tablelistPenugasanSemuaDosen">
      <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column min-width="200" prop="nama_dosen"
                      label="Nama">
      </el-table-column>
      <el-table-column min-width="100" prop="nidn"
                      label="NIDN/NUP/NIDK">
      </el-table-column>
      <el-table-column min-width="50" prop="jenis_kelamin"
                      label="L/P">
      </el-table-column>
      <el-table-column min-width="100" prop="nama_tahun_ajaran"
                      label="Tahun Ajaran">
      </el-table-column>
      <el-table-column min-width="150" prop="program_studi"
                      label="Program Studi">
      </el-table-column>
      <el-table-column min-width="150" prop="nomor_surat_tugas"
                      label="No Surat Tugas">
      </el-table-column>
      <el-table-column min-width="100" prop="tanggal_surat_tugas"
                      label="Tanggal Surat Tugas">
      </el-table-column>
      <el-table-column min-width="100" prop="apakah_homebase"
                      label="Homebase?">
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"  />

  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
// import { Message, MessageBox } from 'element-ui'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listPenugasanSemuaDosen: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        filter: null
      },
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistPenugasanSemuaDosen() {
      return this.$store.getters.listPenugasanSemuaDosen
    }
  },
  methods: {
    fetchData() {
      this.getData()
    },
    getData() {
      if (this.total === 0) {
        this.getTotal()
      }
      this.listLoading = true
      this.$store.dispatch('GetListPenugasanSemuaDosen', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalPenugasanSemuaDosen', '').then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalPenugasanSemuaDosen
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    }
    // handleModifyStatus(row, status) {
    //   this.$message({
    //     message: '操作Success',
    //     type: 'success'
    //   })
    //   row.status = status
    // },
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
  }
}
</script>