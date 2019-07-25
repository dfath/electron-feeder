<template>
  <div class="app-container">
    <el-row type="flex" class="filter-container">
      <el-col :span="12">
        <el-input v-model="listQuery.filter" placeholder="Nama Kurikulum" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
        <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
          Search
        </el-button>
      </el-col>
      <el-col :span="12">
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
      </el-col>
    </el-row>

    <el-table v-loading="listLoading" border :data="tablelistKurikulum">
      <el-table-column min-width="45" type="index" :index="indexMethod" label="No."></el-table-column>
      <el-table-column min-width="168" prop="nama_kurikulum"
                      label="Nama Kurikulum">
      </el-table-column>
      <el-table-column min-width="85" prop="nama_program_studi"
                      label="Program Studi">
      </el-table-column>
      <el-table-column min-width="100" prop="semester_mulai_berlaku"
                      label="Mulai Berlaku">
      </el-table-column>
      <el-table-column min-width="50" prop=""
                      label="Aturan Jumlah sks">
        <el-table-column min-width="45" prop="jumlah_sks_lulus"
                        label="Lulus">
        </el-table-column>
        <el-table-column min-width="45" prop="jumlah_sks_wajib"
                        label="Wajib">
        </el-table-column>
        <el-table-column min-width="50" prop="jumlah_sks_pilihan"
                        label="Pilihan">
        </el-table-column>
      </el-table-column>
      <el-table-column min-width="50" prop=""
                      label="Jumlah sks Matakuliah">
        <el-table-column min-width="50" prop="jumlah_sks_mata_kuliah_wajib"
                        label="Wajib">
        </el-table-column>
        <el-table-column min-width="50" prop="jumlah_sks_mata_kuliah_pilihan"
                        label="Pilihan">
        </el-table-column>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="warning" size="mini" icon="el-icon-edit" @click="handleUpdate(row)">
              Edit
          </el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(row)">
              Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"  />

  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { Message, MessageBox } from 'element-ui'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listKurikulum: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        filter: null
      },
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    tablelistKurikulum() {
      return this.$store.getters.listKurikulum
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
      this.$store.dispatch('GetListKurikulum', this.listQuery).then(() => {
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
      this.$store.dispatch('GetTotalKurikulum', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalKurikulum
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/kurikulum/insertkurikulum')
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
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
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
    handleUpdate(row) {
      this.$store.dispatch('GetDetailKurikulum', row.id_kurikulum).then(() => {
        this.$router.push('/kurikulum/edit')
        console.log('edit kurikulum ini')
      })
      console.log(row)
    },
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
      MessageBox.confirm('Apakah Anda ingin menghapus Biodata ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteKurikulum', row.id_kurikulum).then(() => {
          console.log('delete kurikulum ini')
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
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>