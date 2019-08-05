<template>
  <div class="app-container">
    <el-form size=mini ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Nama Kurikulum">
        <el-input v-model="setKurikulum.nama_kurikulum"></el-input>
      </el-form-item>
      <el-form-item label="Program Studi">
        <el-select v-model="setKurikulum.id_prodi" placeholder="Please select your program studi pengampu">
          <el-option label="D3 Farmasi" value="92992de3-c887-46d5-804d-c4dbec7c553a"></el-option>
          <el-option label="S1 Farmasi" value="02771288-85aa-4ded-ad39-cadfb8760861"></el-option>
          <el-option label="Profesi Profesi Apoteker" value="123904d9-a75c-45a8-8141-fc655ba0c486"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Mulai Berlaku">
        <el-select v-model="setKurikulum.semester_mulai_berlaku" placeholder="Please select your semester">
          <el-option label="2019/2020 Ganjil" value="2019\/2020 Ganjil"></el-option>
          <el-option label="2018/2019 Genap" value="2018\/2019 Genap"></el-option>
          <el-option label="2018/2019 Ganjil" value="2018\/2019 Ganjil"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Jumlah sks">
        <el-input v-model="setKurikulum.jumlah_sks_lulus"></el-input>
      </el-form-item>
      <el-form-item label="Jumlah Bobot Matakuliah Wajib">
        <el-input v-model="setKurikulum.jumlah_sks_wajib"></el-input> sks
      </el-form-item>
      <el-form-item label="Jumlah Bobot Matakuliah Pilihan">
        <el-input v-model="setKurikulum.jumlah_sks_pilihan"></el-input> sks
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Update</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
    <!-- <el-tabs>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-location" /> Edit Kurikulum</span>
        <el-form size=mini ref="form" :model="form" label-width="120px" v-loading="loading">
          <el-form-item label="Nama Kurikulum">
            <el-input v-model="setKurikulum.nama_kurikulum"></el-input>
          </el-form-item>
          <el-form-item label="Program Studi">
            <el-select v-model="setKurikulum.id_prodi" placeholder="Please select your program studi pengampu">
              <el-option label="D3 Farmasi" value="92992de3-c887-46d5-804d-c4dbec7c553a"></el-option>
              <el-option label="S1 Farmasi" value="02771288-85aa-4ded-ad39-cadfb8760861"></el-option>
              <el-option label="Profesi Profesi Apoteker" value="123904d9-a75c-45a8-8141-fc655ba0c486"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Mulai Berlaku">
            <el-select v-model="setKurikulum.semester_mulai_berlaku" placeholder="Please select your semester">
              <el-option label="2019/2020 Ganjil" value="2019\/2020 Ganjil"></el-option>
              <el-option label="2018/2019 Genap" value="2018\/2019 Genap"></el-option>
              <el-option label="2018/2019 Ganjil" value="2018\/2019 Ganjil"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Jumlah sks">
            <el-input v-model="setKurikulum.jumlah_sks_lulus"></el-input>
          </el-form-item>
          <el-form-item label="Jumlah Bobot Matakuliah Wajib">
            <el-input v-model="setKurikulum.jumlah_sks_wajib"></el-input> sks
          </el-form-item>
          <el-form-item label="Jumlah Bobot Matakuliah Pilihan">
            <el-input v-model="setKurikulum.jumlah_sks_pilihan"></el-input> sks
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button @click="onCancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-location" /> Matkul Kurikulum</span>
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

          <el-table size=mini v-loading="listLoading" border :data="tablematkulkurikulum" :cell-style="{padding: '0px', height: '35px'}" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
            <el-table-column min-width="50" prop="nim"
                            label="NIM">
            </el-table-column>
            <el-table-column min-width="80" prop="nama_jenis_daftar"
                            label="Jenis Pendaftaran">
            </el-table-column>
            <el-table-column min-width="60" prop="nama_periode_masuk"
                            label="Periode">
            </el-table-column>
            <el-table-column min-width="60" prop="tanggal_daftar"
                            label="Tanggal Masuk">
            </el-table-column>
            <el-table-column min-width="100" prop="nama_perguruan_tinggi"
                            label="Perguruan Tinggi">
            </el-table-column>
            <el-table-column min-width="50" prop="nama_program_studi"
                            label="Program Studi">
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
    </el-tabs> -->
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
      matkulkurikulum: null,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null
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
    setKurikulum: {
      get() {
        return store.getters.updatekurikulum[0]
      },
      set(value) {
        store.commit('GET_DETAIL_KURIKULUM', value)
      }
    },
    tablematkulkurikulum() {
      return this.$store.getters.matkulkurikulum
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
      this.$store.dispatch('GetMatkulKurikulum', this.listQuery).then(() => {
        console.log('getmatkulkurikulum done')
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
    handleUpload() {
      this.$router.push('/kurikulum/insertmatkulkurikulum')
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
    //   this.$store.dispatch('GetDetailKelasKuliah', row.id_kurikulum).then(() => {
    //     this.$router.push('/matkulkurikulum/edit')
    //     console.log('edit matkulkurikulum ini')
    //   })
    //   console.log(row)
    // },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Matkul di Kurikulum ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteMatkulKurikulum', row).then(() => {
          console.log('delete matkulkurikulum ini')
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
    deleteSelect() {
      console.log(this.multipleSelection)
      const todelete = this.multipleSelection
      this.listLoading = true
      todelete.forEach(data => {
        console.log(data.id_kurikulum)
        store.dispatch('DeleteMatkulKurikulum', data)
        store.dispatch('GetMatkulKurikulum', data.id_kurikulum)
        // this.getData()
      })
      this.getData()
      this.listLoading = false
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
      console.log(store.getters.updatekurikulum[0])
      this.loading = true
      store.dispatch('UpdateKurikulum').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/kurikulum/listkurikulum')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

