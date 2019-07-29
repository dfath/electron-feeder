<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Mahasiswa" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
        Search
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" justify="end">
          <!-- <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <el-button class="filter-item" style="margin-left: 10px;" type="warning" icon="el-icon-plus" @click="handleCreate">
              Buat Baru
            </el-button>
          </el-col> -->
           <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-upload2" @click="handleUpload">
              Import Excel
            </el-button>
           </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" border :data="tablelistMahasiswa">
      <el-table-column min-width="100" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column min-width="200" prop="nama_mahasiswa"
                      label="Nama">
      </el-table-column>
      <el-table-column min-width="85" prop="nim"
                      label="NIM">
      </el-table-column>
      <el-table-column min-width="45" prop="jenis_kelamin"
                      label="L/P">
      </el-table-column>
      <el-table-column min-width="85" prop="nama_agama"
                      label="Agama">
      </el-table-column>
      <el-table-column min-width="100" prop="tanggal_lahir"
                      label="Tanggal Lahir">
      </el-table-column>
      <el-table-column min-width="100" prop="nama_program_studi"
                      label="Program Studi">
      </el-table-column>
      <el-table-column min-width="75" prop="nama_status_mahasiswa"
                      label="Status">
      </el-table-column>
      <el-table-column min-width="150" prop="nama_periode_masuk"
                      label="Periode Masuk">
      </el-table-column>
      <el-table-column label="Actions" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="warning" size="mini" icon="el-icon-edit" @click="handleUpdate(row)">
              Edit
          </el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(row)">
              Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"  />
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { Message, MessageBox } from 'element-ui'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listMahasiswa: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        filter: null
      },
      // rules: {
      //   type: [{ required: true, message: 'type is required', trigger: 'change' }],
      //   timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
      //   title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      // },
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistMahasiswa() {
      return this.$store.getters.listMahasiswa
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
      this.$store.dispatch('GetListMahasiswa', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalMahasiswa', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalMahasiswa
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/mahasiswa/upload')
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    },
    handleUpdate(row) {
      this.$store.dispatch('GetBiodataMahasiswa', row.id_mahasiswa).then(() => {
        this.$router.push('/mahasiswa/edit')
        console.log('edit mahasiswa ini')
      })
      console.log(row)
    },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Biodata Mahasiswa ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteBiodataMahasiswa', row.id_mahasiswa).then(() => {
          console.log('delete mahasiswa ini')
          console.log(row)
          Message({
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          this.getData()
        })
      }).catch(() => {
        Message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
</script>

<style>
  /* .el-row {
    margin: 0.5rem;
  } */
</style>
