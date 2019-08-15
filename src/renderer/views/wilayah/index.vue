
<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Wilayah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
      :data="tableWilayah" 
      :cell-style="{padding: '0px', height: '37px'}"
    >
      <el-table-column 
        min-width="75" 
        type="index" 
        :index="indexMethod" 
        label="No."
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="50" 
        prop="id_wilayah"
        label="ID Wilayah"
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="50" 
        prop="id_negara"
        label="ID Negara"
        align="center"
      >
      </el-table-column>
      <el-table-column 
        min-width="200" 
        prop="nama_wilayah"
        label="Nama Wilayah"
        header-align="center"
      >
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"  />

  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      wilayah: null,
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
    tableWilayah() {
      return this.$store.getters.wilayah
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
      this.$store.dispatch('GetWilayah', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalWilayah', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalWilayah
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