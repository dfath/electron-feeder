<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Mata Kuliah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" justify="end">
           <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-upload2" @click="handleUpload">
              Import Excel
            </el-button>
           </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-table 
      size=mini 
      v-loading="listLoading" 
      border 
      stripe
      :data="tablelistKelasKuliah" 
      :cell-style="{padding: '0px', height: '35px'}"
    >
      <el-table-column 
        min-width="50" 
        type="index" 
        :index="indexMethod" 
        label="No."
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="75" 
        prop="kode_mata_kuliah"
        label="Kode MK"
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="150" 
        prop="nama_mata_kuliah"
        label="Nama MK"
        header-align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="55" 
        prop="nama_kelas_kuliah"
        label="Nama Kelas"
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="40" 
        prop="sks"
        label="Bobot MK (sks)"
        header-align="center"
        align="right"
      >
      </el-table-column>
      <el-table-column 
        min-width="100" 
        prop="nama_dosen"
        label="Dosen Pengajar"
        header-align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="30" 
        prop="jumlah_mahasiswa"
        label="Peserta Kelas"
        header-align="center"
        align="right"
      >
      </el-table-column>
      <el-table-column label="Actions" align="center" width="80" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button-group>
            <el-button size="mini" type="warning" icon="el-icon-edit" circle @click="handleUpdate(row)"></el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="handleDelete(row)"></el-button>
          </el-button-group>
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
      listKelasKuliah: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null
      },
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistKelasKuliah() {
      return this.$store.getters.listKelasKuliah
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
      this.$store.dispatch('GetListKelasKuliah', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalKelasKuliah', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalKelasKuliah
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/kelaskuliah/insertkelaskuliah')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    },
    handleUpdate(row) {
      this.$store.dispatch('GetDetailKelasKuliah', row.id_kelas_kuliah).then(() => {
        this.$router.push('/kelaskuliah/edit')
        console.log('edit kelaskuliah ini')
      })
      console.log(row)
    },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Kelas Kuliah ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteKelasKuliah', row.id_kelas_kuliah).then(() => {
          console.log('delete kelaskuliah ini')
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
          message: 'Delete Canceled'
        })
      })
    }
  }
}
</script>