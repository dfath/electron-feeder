<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Mata Kuliah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </el-col>
      <!-- <el-col :span="12">
        <el-row type="flex" justify="end">
          <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <el-button class="filter-item" style="margin-left: 10px;" type="warning" icon="el-icon-plus" @click="handleCreate">
              Buat Baru
            </el-button>
          </el-col>
           <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-upload2" @click="handleUpload">
              Import Excel
            </el-button>
           </el-col>
        </el-row>
      </el-col> -->
    </el-row>

    <el-table 
      size=mini 
      v-loading="listLoading" 
      border 
      stripe
      :data="tablelistNilaiPerkuliahanKelas" 
      :cell-style="{padding: '0px', height: '37px'}"
    >
      <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column min-width="50" prop="kode_mata_kuliah"
                      label="Kode MK">
      </el-table-column>
      <el-table-column min-width="150" prop="nama_mata_kuliah"
                      label="Nama MK">
      </el-table-column>
      <el-table-column min-width="80" prop="nama_kelas_kuliah"
                      label="Nama Kelas">
      </el-table-column>
      <el-table-column min-width="80" prop="sks_mata_kuliah"
                      label="Bobot MK (sks)">
      </el-table-column>
      <el-table-column min-width="80" prop="jumlah_mahasiswa_krs"
                      label="Peserta Kelas">
      </el-table-column>
      <el-table-column min-width="80" prop="jumlah_mahasiswa_dapat_nilai"
                      label="Peserta Sudah Dinilai">
      </el-table-column>
      <!-- <el-table-column label="Actions" align="center" width="100" class-name="small-padding fixed-width">
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
      listNilaiPerkuliahanKelas: null,
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
    tablelistNilaiPerkuliahanKelas() {
      return this.$store.getters.listNilaiPerkuliahanKelas
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
      this.$store.dispatch('GetListNilaiPerkuliahanKelas', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalNilaiPerkuliahanKelas', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalNilaiPerkuliahanKelas
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    // handleUpload() {
    //   this.$router.push('/perkuliahan/insertnilaiperkuliahan')
    // },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    }
  }
}
</script>