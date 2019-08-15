<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Judul" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
      :data="tablelistAktivitasMahasiswa" 
      :cell-style="{padding: '0px', height: '29px'}"
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
        prop="nama_prodi"
        label="Program Studi"
        :filters="filterProdi"
        :filter-method="filterHandler"
        header-align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="74" 
        prop="nama_semester"
        label="Semester"
        :filters="filterSemester"
        :filter-method="filterHandler"
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="100" 
        prop="nama_jenis_aktivitas"
        label="Jenis"
        :filters="filterJenisAktivitas"
        :filter-method="filterHandler"
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="225" 
        prop="judul"
        label="Judul"
        header-align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="55" 
        prop="tanggal_sk_tugas"
        label="Tanggal SK"
        align="center"
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
      listAktivitasMahasiswa: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null,
        nama_program_studi: null,
        nama_semester: null,
        nama_jenis_aktivitas_mahasiswa: null
      },
      filterProdi: [],
      filterJenisAktivitas: [],
      filterSemester: [],
      prodi: [],
      jenisaktivitas: [],
      semester: [],
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistAktivitasMahasiswa() {
      return this.$store.getters.listAktivitasMahasiswa
    }
  },
  methods: {
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
    getSemester() {
      this.$store.dispatch('GetSemester').then(() => {
        if (this.semester.length === 0) {
          this.semester = this.$store.getters.semester
          console.log('ini semester yg ada di filter', this.semester)
          this.semester.forEach(semester => {
            this.filterSemester.push({ text: `${semester.nama_semester}`, value: `${semester.nama_semester}` })
          })
        }
      }).catch(() => {
      })
    },
    getJenisAktivitas() {
      this.$store.dispatch('GetJenisAktivitasMahasiswa').then(() => {
        if (this.jenisaktivitas.length === 0) {
          this.jenisaktivitas = this.$store.getters.jenisaktivitasmahasiswa
          console.log('ini jenisaktivitas yg ada di filter', this.jenisaktivitas)
          this.jenisaktivitas.forEach(jenisaktivitas => {
            this.filterJenisAktivitas.push({ text: `${jenisaktivitas.nama_jenis_aktivitas_mahasiswa}`, value: `${jenisaktivitas.nama_jenis_aktivitas_mahasiswa}` })
          })
        }
      }).catch(() => {
      })
    },
    fetchData() {
      this.getProdi()
      this.getSemester()
      this.getJenisAktivitas()
      this.getData()
    },
    getData() {
      if (this.total === 0) {
        this.getTotal()
      }
      this.listLoading = true
      this.$store.dispatch('GetListAktivitasMahasiswa', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalAktivitasMahasiswa', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalAktivitasMahasiswa
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/aktivitas/insertaktivitasmahasiswa')
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
      this.$store.dispatch('GetDetailAktivitasMahasiswa', row.id_aktivitas).then(() => {
        this.$router.push('/aktivitas/edit')
        console.log('edit aktivitas ini')
      })
      console.log(row)
    },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Aktivitas Mahasiswa ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteAktivitasMahasiswa', row.id_aktivitas).then(() => {
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