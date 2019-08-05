
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

    <!-- <el-button @click="resetDateFilter">reset date filter</el-button>
    <el-button @click="clearFilter">reset all filters</el-button> -->

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
      >
      </el-table-column>

      <el-table-column
        min-width="150"
        prop="nama_substansi"
        label="Nama Substansi"
        sortable
        column-key="nama_substansi"
        :filters="[{text: 'tes4', value: 'tes4'}, {text: 'Substansi 02', value: 'Substansi 02'}, {text: 'Substansi 03', value: 'Substansi 03'}]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        min-width="75"
        prop="sks_mata_kuliah"
        label="Bobot Mata Kuliah (sks)"
      >
      </el-table-column>
      <el-table-column
        min-width="75"
        prop="sks_tatap_muka"
        label="Bobot Tatap Muka (sks)"
      >
      </el-table-column>
      <el-table-column
        min-width="75"
        prop="sks_praktek"
        label="Bobot Praktek (sks)"
      >
      </el-table-column>
      <el-table-column
        min-width="75"
        prop="sks_praktek_lapangan"
        label="Bobot Praktek Lapangan (sks)"
      >
      </el-table-column>
      <el-table-column
        min-width="75"
        prop="sks_simulasi"
        label="Bobot Simulasi (sks)"
      >
      </el-table-column>

      <!-- <el-table-column
        min-width="75"
        prop="tag"
        label="Tag"
        width="100"
        :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === 'Home' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column> -->
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
      tableData: [{
        no: 1,
        nama_substansi: 'Substansi 03',
        sks_mata_kuliah: '2.00',
        sks_tatap_muka: '2.00',
        sks_praktek: 0.00,
        sks_praktek_lapangan: 0,
        sks_simulasi: 0,
        tag: 'Home'
      }, {
        nama_substansi: 'Substansi 02',
        sks_mata_kuliah: '2.00',
        sks_tatap_muka: '2.00',
        sks_praktek: 0.00,
        tag: 'Office'
      }, {
        nama_substansi: 'Substansi 04',
        sks_mata_kuliah: '2.00',
        sks_tatap_muka: '2.00',
        sks_praktek: 0.00,
        tag: 'Home'
      }, {
        nama_substansi: 'tes4',
        sks_mata_kuliah: '2.00',
        sks_tatap_muka: '2.00',
        sks_praktek: 0.00,
        tag: 'Office'
      }, {
        nama_substansi: 'tes3',
        sks_mata_kuliah: '2.00',
        sks_tatap_muka: '2.00',
        sks_praktek: '0'
      }, {
        nama_substansi: 'tes4',
        sks_mata_kuliah: '4.00',
        sks_tatap_muka: '3.00',
        sks_praktek: '1.00'
      }],

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
    handleUpload() {
      this.$router.push('/matakuliah/insertmatakuliah')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getTotal()
      this.getData()
    },
    // handleModifyStatus(row, status) {
    //   this.$message({
    //     message: '操作Success',
    //     type: 'success'
    //   })
    //   row.status = status
    // },
    // sortChange(data) {
    //   const { prop, order } = data
    //   if (prop === 'id') {
    //     this.sortByID(order)
    //   }
    // },
    // sortByID(order) {
    //   if (order === 'ascending') {
    //     this.listQuery.sort = '+id'
    //   } else {
    //     this.listQuery.sort = '-id'
    //   }
    //   this.handleFilter()
    // },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // createData() {
    //   this.$refs['dataForm'].validate((valid) => {
    //     if (valid) {
    //       this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
    //       this.temp.author = 'vue-element-admin'
    //       createArticle(this.temp).then(() => {
    //         this.list.unshift(this.temp)
    //         this.dialogFormVisible = false
    //         this.$notify({
    //           title: 'Success',
    //           message: 'Created Successfully',
    //           type: 'success',
    //           duration: 2000
    //         })
    //       })
    //     }
    //   })
    // },
    // handleUpdate(row) {
    //   this.temp = Object.assign({}, row) // copy obj
    //   this.temp.timestamp = new Date(this.temp.timestamp)
    //   this.dialogStatus = 'update'
    //   this.dialogFormVisible = true
    //   this.$nextTick(() => {
    //     this.$refs['dataForm'].clearValidate()
    //   })
    // },
    // updateData() {
    //   this.$refs['dataForm'].validate((valid) => {
    //     if (valid) {
    //       const tempData = Object.assign({}, this.temp)
    //       tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
    //       updateArticle(tempData).then(() => {
    //         for (const v of this.list) {
    //           if (v.id === this.temp.id) {
    //             const index = this.list.indexOf(v)
    //             this.list.splice(index, 1, this.temp)
    //             break
    //           }
    //         }
    //         this.dialogFormVisible = false
    //         this.$notify({
    //           title: 'Success',
    //           message: 'Update Successfully',
    //           type: 'success',
    //           duration: 2000
    //         })
    //       })
    //     }
    //   })
    // },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Substansi Kuliah ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteSubstansiKuliah', row.id_matkul).then(() => {
          console.log('delete matkul ini')
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