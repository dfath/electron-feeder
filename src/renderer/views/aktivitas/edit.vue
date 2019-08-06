<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-edit"/> Edit Kelas</span>
        <el-form size=mini ref="form" label-width="120px" v-loading="loading">
          <el-form-item label="Program Studi" required>
            <el-input v-model="setAktivitas.id_prodi" disabled></el-input>
          </el-form-item>
          <el-form-item label="Semester" required>
            <el-input v-model="setAktivitas.id_semester" disabled></el-input>
          </el-form-item>
          <el-form-item label="Jenis Aktivitas" required>
            <el-select v-model="setAktivitas.id_jenis_aktivitas" placeholder="Please select your activity">
              <el-option label="Laporan akhir studi" value="1"></el-option>
              <el-option label="Tugas akhir" value="2"></el-option>
              <el-option label="Tesis" value="3"></el-option>
              <el-option label="Disertasi" value="4"></el-option>
              <el-option label="Kuliah kerja nyata" value="5"></el-option>
              <el-option label="Kerja praktek\/PKL" value="6"></el-option>
              <el-option label="Bimbingan akademis" value="7"></el-option>
              <el-option label="Aktivitas kemahasiswaan" value="10"></el-option>
              <el-option label="Program kreativitas mahasiswa" value="11"></el-option>
              <el-option label="Kompetisi" value="12"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Judul" required>
            <el-input type="textarea" v-model="setAktivitas.judul"></el-input>
          </el-form-item>
          <el-form-item label="Lokasi">
            <el-input v-model="setAktivitas.lokasi"></el-input>
          </el-form-item>
          <el-form-item label="Nomor SK Tugas">
            <el-input v-model="setAktivitas.sk_tugas"></el-input>
          </el-form-item>
          <el-form-item label="Tanggal SK Tugas">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="setAktivitas.tanggal_sk_tugas" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Jenis Anggota">
            <el-radio-group v-model="setAktivitas.jenis_anggota">
              <el-radio label="0">Personal</el-radio>
              <el-radio label="1">Kelompok</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Keterangan">
            <el-input type="textarea" v-model="setAktivitas.keterangan"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button @click="onCancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane>   
        <span slot="label"><i class="el-icon-info" /> Anggota Aktivitas</span>

        <template>
            <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
              <el-col :span="11">
                <el-input v-model="listQuery.filter" placeholder="Nama Anggota Aktivitas" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
                <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
                  Search
                </el-button>
              </el-col>
              <el-col :span="13">
                <el-row type="flex" justify="end">
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-upload2" @click="handleUpload">
                      Import Excel
                    </el-button>
                  </el-col>
                  <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                    <el-button v-waves type="danger" icon="el-icon-delete" @click="deleteSelect" :disabled="disableDelete">
                      Delete Selected
                    </el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-table size=mini stripe v-loading="listLoading" border :data="tablelistAnggotaAktivitasMahasiswa" :cell-style="{padding: '0px', height: '35px'}" @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
              <el-table-column min-width="70" prop="nim"
                              label="NIM">
              </el-table-column>
              <el-table-column min-width="125" prop="nama_mahasiswa"
                              label="Nama Peserta">
              </el-table-column>
              <el-table-column min-width="75" prop="nama_jenis_peran"
                              label="Jenis">
              </el-table-column>
              <el-table-column label="Actions" align="center" width="80" class-name="small-padding fixed-width">
                <template slot-scope="{row}">
                  <el-button-group>
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(row)"></el-button>
                  </el-button-group>
                </template>
              </el-table-column>
            </el-table>

            <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData"/>

        </template>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '@/store'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { Message, MessageBox } from 'element-ui'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listAnggotaAktivitasMahasiswa: null,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null,
        id: store.getters.updateaktivitas[0].id_aktivitas
      },
      downloadLoading: false,
      multipleSelection: [],
      disableDelete: true
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    setAktivitas: {
      get() {
        return store.getters.updateaktivitas[0]
      },
      set(value) {
        store.commit('GET_LIST_AKTIVITAS_MAHASISWA', value)
      }
    },
    tablelistAnggotaAktivitasMahasiswa() {
      return this.$store.getters.listAnggotaAktivitasMahasiswa
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
      const data = store.getters.updateaktivitas[0]
      console.log('ini anggotaaktivitas', data)
      this.listLoading = true
      this.$store.dispatch('GetListAnggotaAktivitasMahasiswa', this.listQuery).then(() => {
        console.log('getlistanggotaaktivitasmahasiswa done')
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
      this.$store.dispatch('GetTotalAnggotaAktivitasMahasiswa', this.listQuery).then(() => {
        this.listLoading = false
        this.total = this.$store.getters.totalAnggotaAktivitasMahasiswa
        console.log(this.total)
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleUpload() {
      this.$router.push('/aktivitas/insertanggotaaktivitasmahasiswa')
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
    //   this.$store.dispatch('GetDetailAnggotaAktivitasMahasiswa', row.id_aktivitas).then(() => {
    //     this.$router.push('/anggotaaktivitas/edit')
    //     console.log('edit anggotaaktivitas ini')
    //   })
    //   console.log(row)
    // },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Anggota Aktivitas ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteAnggotaAktivitasMahasiswa', row).then(() => {
          console.log('delete anggotaaktivitas ini')
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
    deleteSelect() {
      console.log(this.multipleSelection)
      const todelete = this.multipleSelection
      this.listLoading = true
      todelete.forEach(data => {
        store.dispatch('DeleteAnggotaAktivitasMahasiswa', data)
        store.dispatch('GetListAnggotaAktivitasMahasiswa', this.listQuery)
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
    },

    onSubmit() {
      console.log(store.getters.updateaktivitas[0])
      this.loading = true
      store.dispatch('UpdateAktivitasMahasiswa').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/aktivitas/listaktivitasmahasiswa')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

