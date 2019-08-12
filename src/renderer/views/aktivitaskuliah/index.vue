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
      stripe :data="tableaktivitasKuliahMahasiswa" 
      :cell-style="{padding: '0px', height: '33px'}"
    >
      <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column 
        min-width="45" 
        prop="nim"
        label="NIM"
      >
      </el-table-column>
      <el-table-column 
        min-width="80" 
        prop="nama_mahasiswa"
        label="Nama Mahasiswa"
      >
      </el-table-column>
      <el-table-column 
        min-width="53" 
        prop="nama_program_studi"
        label="Program Studi"
        :filters="filterProdi"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="40" 
        prop="angkatan"
        label="Angkatan"
        :filters="filterAngkatan"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="55" 
        prop="nama_semester"
        label="Semester"
        :filters="filterSemester"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="50" 
        prop="nama_status_mahasiswa"
        label="Status"
        :filters="filterStatus"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="25" 
        prop="ips"
        label="IPS"
      >
      </el-table-column>
      <el-table-column 
        min-width="25" 
        prop="ipk"
        label="IPK"
      >
      </el-table-column>
      <el-table-column 
        min-width="40" 
        prop="sks_semester"
        label="sks Semester"
      >
      </el-table-column>
      <el-table-column 
        min-width="30" 
        prop="sks_total"
        label="sks Total"
      >
      </el-table-column>
      <!-- <el-table-column label="Actions" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="warning" size="mini" icon="el-icon-edit" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(row)">
            Delete
          </el-button>
        </template>
      </el-table-column> -->
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
      aktivitasKuliahMahasiswa: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null,
        nama_program_studi: null,
        nama_semester: null,
        nama_status_mahasiswa: null
      },
      filterProdi: [],
      filterAngkatan: [],
      filterSemester: [],
      filterStatus: [],
      prodi: [],
      angkatan: [],
      semester: [],
      status: [],
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tableaktivitasKuliahMahasiswa() {
      return this.$store.getters.aktivitasKuliahMahasiswa
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
    getStatus() {
      this.$store.dispatch('GetStatusMahasiswa').then(() => {
        if (this.status.length === 0) {
          this.status = this.$store.getters.statusmahasiswa
          console.log('ini status yg ada di filter', this.status)
          this.status.forEach(status => {
            this.filterStatus.push({ text: `${status.nama_status_mahasiswa}`, value: `${status.nama_status_mahasiswa}` })
          })
        }
      }).catch(() => {
      })
    },
    fetchData() {
      this.getProdi()
      this.getStatus()
      this.getSemester()
      this.getData()
    },
    getData() {
      if (this.total === 0) {
        this.getTotal()
      }
      this.listLoading = true
      this.$store.dispatch('GetAktivitasKuliahMahasiswa', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalAktivitasKuliahMahasiswa', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalAktivitasKuliahMahasiswa
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/perkuliahan/insertperkuliahanmahasiswa')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    },
    // handleUpdate(row) {
    //   this.$store.dispatch('GetDetailMataKuliah', row.id_matkul).then(() => {
    //     this.$router.push('/matakuliah/edit')
    //     console.log('edit matakuliah ini')
    //   })
    //   console.log(row)
    // },
    // handleDelete(row) {
    //   MessageBox.confirm('Apakah Anda ingin menghapus Aktivitas Kuliah ini?', 'Confirm Delete', {
    //     confirmButtonText: 'Ya',
    //     cancelButtonText: 'Tidak',
    //     type: 'warning'
    //   }).then(() => {
    //     this.$store.dispatch('DeleteAktivitasKuliahMahasiswa', row.id_kelaskuliah).then(() => {
    //       console.log('delete kelaskuliah ini')
    //       console.log(row)
    //       Message({
    //         message: 'Delete Successfully',
    //         type: 'success',
    //         duration: 2000
    //       })
    //       this.getData()
    //     })
    //   }).catch(() => {
    //     Message({
    //       type: 'info',
    //       message: 'Delete Canceled'
    //     })
    //   })
    // },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>