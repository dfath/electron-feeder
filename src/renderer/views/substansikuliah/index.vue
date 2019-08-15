
<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Substansi" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
      :cell-style="{padding: '0px', height: '37px'}"
      stripe
      ref="filterTable"
      :data="tablelistSubstansiKuliah"
      style="width: 100%">
      
      <el-table-column
        min-width="20" 
        type=index
        label="No."
        align="center"
      >
      </el-table-column>
      <el-table-column
        min-width="150"
        prop="nama_substansi"
        label="Nama Substansi"
        sortable
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        min-width="88"
        prop="sks_mata_kuliah"
        label="Bobot Mata Kuliah (sks)"
        header-align="center"
        align="right"
      >
      </el-table-column>
      <el-table-column
        min-width="88"
        prop="sks_tatap_muka"
        label="Bobot Tatap Muka (sks)"
        header-align="center"
        align="right"
      >
      </el-table-column>
      <el-table-column
        min-width="88"
        prop="sks_praktek"
        label="Bobot Praktek (sks)"
        header-align="center"
        align="right"
      >
      </el-table-column>
      <el-table-column
        min-width="88"
        prop="sks_praktek_lapangan"
        label="Bobot Praktek Lapangan (sks)"
        header-align="center"
        align="right"
      >
      </el-table-column>
      <el-table-column
        min-width="88"
        prop="sks_simulasi"
        label="Bobot Simulasi (sks)"
        header-align="center"
        align="right"
      >
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
      listSubstansiKuliah: null,
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
    tablelistSubstansiKuliah() {
      return this.$store.getters.listSubstansiKuliah
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
      this.$store.dispatch('GetListSubstansiKuliah', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalSubstansiKuliah', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalSubstansiKuliah
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