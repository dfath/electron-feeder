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
      :data="tablelistMahasiswaLulusDO" 
      :cell-style="{padding: '0px', height: '38px'}"
    >
      <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column 
        min-width="100" 
        prop="nim"
        label="NIM"
      >
      </el-table-column>
      <el-table-column 
        min-width="200" 
        prop="nama_mahasiswa"
        label="Nama Mahasiswa"
      >
      </el-table-column>
      <el-table-column 
        min-width="150" 
        prop="nama_program_studi"
        label="Program Studi"
        :filters="filterProdi"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="85" 
        prop="angkatan"
        label="Angkatan"
        :filters="filterAngkatan"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="122" 
        prop="nama_jenis_keluar"
        label="Jenis Keluar"
        :filters="filterJenisKeluar"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="122" 
        prop="tanggal_keluar"
        label="Tanggal Keluar">
      </el-table-column>
      <el-table-column 
        min-width="100" 
        prop="keterangan"
        label="Keterangan">
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
      listMahasiswaLulusDO: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null,
        nama_program_studi: null,
        jenis_keluar: null
      },
      filterProdi: [],
      filterAngkatan: [],
      filterJenisKeluar: [],
      prodi: [],
      jeniskeluar: [],
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistMahasiswaLulusDO() {
      return this.$store.getters.listMahasiswaLulusDO
    }
  },
  methods: {
    getProdi() {
      let i = new Date().getFullYear()
      console.log(i)
      while (i > 1979) {
        console.log(i)
        this.filterAngkatan.push({ text: i.toString(), value: i.toString() })
        i--
      }
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
    getJenisKeluar() {
      this.$store.dispatch('GetJenisKeluar').then(() => {
        if (this.jeniskeluar.length === 0) {
          this.jeniskeluar = this.$store.getters.jeniskeluar
          console.log('ini jeniskeluar yg ada di filter', this.jeniskeluar)
          this.jeniskeluar.forEach(jeniskeluar => {
            this.filterJenisKeluar.push({ text: `${jeniskeluar.jenis_keluar}`, value: `${jeniskeluar.jenis_keluar}` })
          })
        }
      }).catch(() => {
      })
    },
    fetchData() {
      this.getProdi()
      this.getJenisKeluar()
      this.getData()
    },
    getData() {
      if (this.total === 0) {
        this.getTotal()
      }
      this.listLoading = true
      this.$store.dispatch('GetListMahasiswaLulusDO', this.listQuery).then(() => {
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    indexMethod(index) {
      if (this.listQuery.page > 1) {
        return index + 1 + (this.listQuery.limit * (this.listQuery.page - 1))
      } else {
        return index + 1
      }
    },
    getTotal() {
      this.$store.dispatch('GetTotalMahasiswaLulusDO', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalMahasiswaLulusDO
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/lulusdo/insertmahasiswalulusdo')
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
      this.$store.dispatch('GetDetailMahasiswaLulusDO', row.id_registrasi_mahasiswa).then(() => {
        this.$router.push('/lulusdo/edit')
        console.log('edit lulusdo ini')
      })
      console.log(row)
    },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus data Mahasiswa Lulus/Drop Out ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteMahasiswaLulusDO', row.id_registrasi_mahasiswa).then(() => {
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