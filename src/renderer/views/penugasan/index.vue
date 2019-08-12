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
      :data="tablelistPenugasanSemuaDosen" 
      :cell-style="{padding: '0px', height: '26px'}"
    >
      <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column 
        min-width="200" 
        prop="nama_dosen"
        label="Nama"
      >
      </el-table-column>
      <el-table-column 
        min-width="90" 
        prop="nidn"
        label="NIDN/NUP/NIDK"
      >
      </el-table-column>
      <el-table-column 
        min-width="40" 
        prop="jenis_kelamin"
        label="L/P"
        :filters="filterJenisKelamin"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="90" 
        prop="nama_tahun_ajaran"
        label="Tahun Ajaran"
        :filters="filterTahunAjaran"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="125" 
        prop="program_studi"
        label="Program Studi"
        :filters="filterProdi"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="125" 
        prop="nomor_surat_tugas"
        label="No Surat Tugas"
      >
      </el-table-column>
      <el-table-column 
        min-width="80" 
        prop="tanggal_surat_tugas"
        label="Tanggal Surat Tugas"
      >
      </el-table-column>
      <el-table-column 
        min-width="90" 
        prop="apakah_homebase"
        label="Homebase?"
      >
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
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
        limit: 10,
        filter: null,
        nama_tahun_ajaran: null,
        nama_program_studi: null
      },
      filterJenisKelamin: [
        { text: 'Laki-laki', value: 'L' },
        { text: 'Perempuan', value: 'P' }
      ],
      filterProdi: [],
      prodi: [],
      downloadLoading: false,
      filterTahunAjaran: [],
      tahunajaran: []
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
    getTahunAjaran() {
      this.$store.dispatch('GetTahunAjaran').then(() => {
        if (this.tahunajaran.length === 0) {
          this.tahunajaran = this.$store.getters.tahunajaran
          console.log('ini tahunajaran yg ada di filter', this.tahunajaran)
          this.tahunajaran.forEach(tahunajaran => {
            this.filterTahunAjaran.push({ text: `${tahunajaran.nama_tahun_ajaran}`, value: `${tahunajaran.nama_tahun_ajaran}` })
          })
        }
      }).catch(() => {
      })
    },
    getProdi() {
      this.$store.dispatch('GetProdi').then(() => {
        if (this.prodi.length === 0) {
          this.prodi = this.$store.getters.prodi
          console.log('ini prodi yg ada di filter', this.prodi)
          this.prodi.forEach(prodi => {
            this.filterProdi.push({ text: `${prodi.nama_jenjang_pendidikan} ${prodi.nama_program_studi}`, value: `${prodi.nama_jenjang_pendidikan} ${prodi.nama_program_studi}` })
          })
        }
      }).catch(() => {
      })
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    fetchData() {
      this.getTahunAjaran()
      this.getProdi()
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
  }
}
</script>