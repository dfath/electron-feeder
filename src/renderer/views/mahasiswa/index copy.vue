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

    <!-- <el-button @click="resetDateFilter">reset date filter</el-button>
    <el-button @click="clearFilter">reset all filters</el-button> -->

    <el-table 
      v-loading="listLoading" 
      border 
      :data="tablelistMahasiswa" 
      :cell-style="{padding: '0px', height: '37px'}"
      max-height="500"
      size=mini
      stripe
      ref="filterTable"
    >
      <el-table-column min-width="100" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column min-width="200" prop="nama_mahasiswa"
                      label="Nama">
      </el-table-column>
      <el-table-column 
        min-width="100" 
        prop="nim"
        label="NIM"
      >
      </el-table-column>
      <el-table-column 
        min-width="40" 
        prop="jenis_kelamin"
        label="L/P"
        
        column-key="jenis_kelamin"
        :filters="filterJenisKelamin"
        :filter-method="filterHandler"  
      >
      </el-table-column>
      <el-table-column min-width="80" prop="nama_agama"
                      label="Agama">
      </el-table-column>
      <el-table-column min-width="105" prop="tanggal_lahir"
                      label="Tanggal Lahir">
      </el-table-column>
      <el-table-column 
        min-width="160" 
        prop="nama_program_studi"
        label="Program Studi"

        
        column-key="nama_program_studi"
        :filters="filterProdi"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column 
        min-width="110" 
        prop="nama_status_mahasiswa"
        label="Status"
        
        column-key="nama_status_mahasiswa"
        :filters="[{text: 'AKTIF', value: 'AKTIF'}, {text: 'Lulus', value: 'Lulus'}, {text: 'Lainnya', value: 'Lainnya'}]"
        :filter-method="filterHandler"  
      >
      </el-table-column>
      <el-table-column 
        min-width="125" 
        prop="nama_periode_masuk"
        label="Periode Masuk"

        
        column-key="nama_periode_masuk"
        :filters="[{text: '2018/2019 Genap', value: '2018/2019 Genap'}, {text: '2019/2020 Ganjil', value: '2019/2020 Ganjil'}, {text: '2018/2019 Ganjil', value: '2018/2019 Ganjil'}]"
        :filter-method="filterHandler"
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
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" size="mini"/>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { Message, MessageBox } from 'element-ui'
// import store from '@/store'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      // listMahasiswa: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null
      },
      filterJenisKelamin: [
        { text: 'L', value: 'L' },
        { text: 'P', value: 'P' }
      ],
      filterProdi: [
        { text: '', value: '' }
      ],
      prodi: null,
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
    // store.dispatch('GetProdi').then(() => {
    //   this.prodioption = store.getters.prodi
    //   console.log('ini prodi dari store ' + this.prodioption)
    // })
  },
  computed: {
    tablelistMahasiswa() {
      return this.$store.getters.listMahasiswa
    }
    // filterProdi() {
    //   return this.$store.getters.prodi
    // }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
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
      this.$store.dispatch('GetProdi').then(() => {
        this.prodi = this.$store.getters.prodi
        console.log('ini filter prodi ' + this.prodi[0].nama_jenjang_pendidikan)
        this.filterProdi[0].text = this.prodi[1].nama_jenjang_pendidikan + ' ' + this.prodi[1].nama_program_studi
        this.filterProdi[0].value = this.prodi[1].nama_jenjang_pendidikan + ' ' + this.prodi[1].nama_program_studi
        console.log('ini textnya filter prodi ' + this.filterProdi.text)
        console.log('ini value-nya filter prodi ' + this.filterProdi.value)
        this.filterProdi.text = this.prodi[1].nama_jenjang_pendidikan
        console.log('ini textnya filter prodi setelah diubah ' + this.filterProdi.text)
        console.log(this.filterProdi)
      }).catch(() => {
        this.listLoading = false
      })

      this.$store.dispatch('GetTotalMahasiswa', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalMahasiswa
        console.log('ini total ' + this.total)
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

