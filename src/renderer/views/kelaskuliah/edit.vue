<template>
  <el-tabs>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-location"/> Edit Kelas</span>
      <el-form ref="form" label-width="120px" v-loading="loading">
        <el-form-item label="Program Studi" required>
          <el-input v-model="setKelasKuliah.nama_program_studi" disabled></el-input>
        </el-form-item>
        <el-form-item label="Semester" required>
          <el-input v-model="setKelasKuliah.id_semester" disabled></el-input>
        </el-form-item>
        <el-form-item label="Mata Kuliah" required >
          <el-input v-model="setKelasKuliah.nama_mata_kuliah" disabled></el-input>
        </el-form-item>
        <!-- <el-form-item label="Bobot Mata Kuliah">
          <el-input v-model="setKelasKuliah.jumlah_sks_lulus"></el-input>
        </el-form-item>
        <el-form-item label="Bobot Tatap Muka">
          <el-input v-model="setKelasKuliah.jumlah_sks_wajib"></el-input> sks
        </el-form-item>
        <el-form-item label="Bobot Praktikum">
          <el-input v-model="setKelasKuliah.jumlah_sks_pilihan"></el-input> sks
        </el-form-item>
        <el-form-item label="Bobot Praktek Lapangan">
          <el-input v-model="setKelasKuliah.jumlah_sks_pilihan"></el-input> sks
        </el-form-item>
        <el-form-item label="Bobot Simulasi">
          <el-input v-model="setKelasKuliah.jumlah_sks_pilihan"></el-input> sks
        </el-form-item> -->
        <el-form-item label="Nama Kelas" required>
          <el-input v-model="setKelasKuliah.nama_kelas_kuliah"></el-input>
        </el-form-item>
        <el-form-item label="Bahasan">
          <el-input type="textarea" v-model="setKelasKuliah.bahasan"></el-input>
        </el-form-item>
        <el-form-item label="Tanggal Mulai Efektif">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="Pick a date" v-model="setKelasKuliah.tanggal_mulai_efektif" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Tanggal Akhir Efektif">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="Pick a date" v-model="setKelasKuliah.tanggal_akhir_efektif" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">Update</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane>   
      <span slot="label"><i class="el-icon-location" /> Peserta Kelas</span>

      <template>
          <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
            <el-col :span="12">
              <el-input v-model="listQuery.filter" placeholder="Nama Peserta Kelas Kuliah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
                Search
              </el-button>
            </el-col>
          </el-form-item>
          <el-form-item label="Tanggal Akhir Efektif">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="setKelasKuliah.tanggal_akhir_efektif" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button @click="onCancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane>   
        <span slot="label"><i class="el-icon-location" /> Peserta Kelas</span>
        <template>
            <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
              <el-col :span="12">
                <el-input v-model="listQuery.filter" placeholder="Nama Peserta Kelas Kuliah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
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
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <el-button v-waves type="danger" icon="el-icon-delete" @click="deleteSelect" :disabled="disableDelete" >
                      Delete Selected
                    </el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-table size=mini v-loading="listLoading" border :data="tablepesertaKelasKuliah" :cell-style="{padding: '0px', height: '35px'}" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
              <el-table-column min-width="75" prop="nim"
                              label="NIM">
              </el-table-column>
              <el-table-column min-width="150" prop="nama_mahasiswa"
                              label="Nama Mahasiswa">
              </el-table-column>
              <el-table-column min-width="45" prop="nama_program_studi"
                              label="Jurusan">
              </el-table-column>
              <el-table-column min-width="45" prop="angkatan"
                              label="Angkatan">
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
            <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"/>

        </template>
      </el-tab-pane>

      <el-tab-pane>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '@/store'
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
      pesertaKelasKuliah: null,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null,
        id: store.getters.updatekelaskuliah[0].id_kelas_kuliah
      },
      downloadLoading: false,
      multipleSelection: [],
      loading: false,
      checkList: ['selected and disabled', 'Option A'],
      nama_kebutuhan_khusus: ['A - Tuna netra', 'B - Tuna rungu'],
      disableDelete: true
      // rules: {
      //   butuh: [
      //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
      //     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      //   ],
      //   takbisa: [
      //     { disabled: true }
      //   ]
      // }
    }
  },
  created() {
    this.fetchData()
  },

  computed: {
    setKelasKuliah: {
      get() {
        return store.getters.updatekelaskuliah[0]
      },
      set(value) {
        store.commit('GET_DETAIL_KELAS_KULIAH', value)
      }
    },
    tablepesertaKelasKuliah() {
      return this.$store.getters.pesertaKelasKuliah
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
      const data = store.getters.updatekelaskuliah[0]
      console.log('ini datakelas kuliah', data)
      this.listLoading = true
      this.$store.dispatch('GetPesertaKelasKuliah', this.listQuery).then(() => {
        console.log('getpeserta done')
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
      this.$store.dispatch('GetTotalPesertaKelasKuliah', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalPesertaKelasKuliah
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/kelaskuliah/insertpesertakelaskuliah')
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
      this.$store.dispatch('GetDetailKelasKuliah', row.id_kelas_kuliah).then(() => {
        this.$router.push('/kelaskuliah/edit')
        console.log('edit kelaskuliah ini')
      })
      console.log(row)
    },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Kelas Kuliah ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteKelasKuliah', row.id_kelas_kuliah).then(() => {
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
    },

    onSubmit() {
      console.log(store.getters.updatekelaskuliah[0])
      this.loading = true
      store.dispatch('UpdateKelasKuliah').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/kelaskuliah/listkelaskuliah')
    },
    deleteSelect() {
      console.log(this.multipleSelection)
      const todelete = this.multipleSelection
      this.listLoading = true
      todelete.forEach(data => {
        store.dispatch('DeletePesertaKelasKuliah', data)
        store.dispatch('GetPesertaKelasKuliah', this.listQuery)
        // this.getData()
      })
      this.getData()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      if (this.multipleSelection.length > 0) {
        this.disableDelete = false
      } else {
        this.disableDelete = true
      }
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

