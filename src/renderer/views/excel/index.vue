<template>
  <div v-loading="loading" class="app-container">
    <h1>Upload File Excel</h1>
    <el-row  type="flex" justify="center" >
      <el-col :span="24">
        <div class="grid-content">
          <el-row  type="flex" justify="end" >
            <el-col :span="3">
              <div>
                <el-button v-waves type="warning" icon="el-icon-info" @click.prevent.stop="guide">
                  Tutorial
                </el-button>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button id="tombol-contoh" v-waves type="info" icon="el-icon-download" @click="handleDownload">
                  Download Contoh File Excel
                </el-button>
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-button id="tombol-ekspor" ref="kirim" v-waves type="success" icon="el-icon-upload2" @click="handleUpload" :disabled="disablekirim" >
                  Kirim ke Feeder PDDikti
                </el-button>
              </div>
            </el-col>
          </el-row>
        <!-- Upload Component -->
        <upload-excel-component id="upload" :on-success="handleSuccess" :before-upload="beforeUpload" />
        
        </div>
      </el-col>
    </el-row>
    <!-- Uploaded Table -->
    <!-- https://codepen.io/Event_Horizon/pen/WodMjp -->
    <el-table 
      id="uploaded-table" 
      :data="tableData" 
      border 
      stripe
      :cell-style="{padding: '0px', height: '20px'}"
      size=mini
      max-height="500"
    >
      <el-table-column 
        align="center"
        v-for="item of tableHeader" 
        :key="item" 
        :prop="item" 
        :label="item" 
        :min-width="(String(tableData[0][item]).length + item.length + 4) * 7"
      />
    </el-table>
    <div class="components-container">
      <!-- you can add element-ui's tooltip -->
      <!-- <el-tooltip placement="top" content="tooltip">
        <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
      </el-tooltip> -->
    </div>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import store from '@/store'
import waves from '@/directive/waves'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps'
import fs from 'fs'
import path from 'path'
// import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  directives: { waves },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      visible: false,
      destination: null,
      driver: null,
      disablekirim: true
    }
  },
  mounted() {
    this.driver = new Driver()
  },
  computed: {
    loading() {
      return store.getters.loading
    }
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.destination = store.getters.destination
      console.log('uploadsucces', results)
      console.log(JSON.stringify(results[0]))
      console.log(this.destination)
      const dispatchdest = {
        'biodatamahasiswa': 'SetBiodataMahasiswa',
        'riwayatpendidikan': 'SetRiwayatPendidikanMahasiswa',
        'matakuliah': 'SetMataKuliah',
        'kurikulum': 'SetKurikulum',
        'matkulkurikulum': 'SetMatkulKurikulum',
        'kelaskuliah': 'SetKelasKuliah',
        'pesertakelaskuliah': 'SetPesertaKelasKuliah',
        'dosenpengajarkelaskuliah': 'SetDosenPengajarKelasKuliah',
        'perkuliahanmahasiswa': 'SetPerkuliahanMahasiswa',
        'aktivitas': 'SetAktivitasMahasiswa',
        'anggotaaktivitas': 'SetAnggotaAktivitasMahasiswa',
        'lulusdo': 'SetMahasiswaLulusDO',
        'bimbing': 'SetBimbingMahasiswa',
        'uji': 'SetUjiMahasiswa',
        'nilaiperkuliahan': 'SetNilaiPerkuliahan',
        'prestasimahasiswa': 'SetPrestasiMahasiswa'
      }
      store.dispatch(dispatchdest[this.destination], results)
      this.tableData = results
      this.tableHeader = header
      this.disablekirim = false
    },
    handleUpload() {
      this.destination = store.getters.destination
      const dispatchdest = {
        'biodatamahasiswa': 'InsertBiodataMahasiswa',
        'riwayatpendidikan': 'InsertRiwayatPendidikanMahasiswa',
        'matakuliah': 'InsertMataKuliah',
        'kurikulum': 'InsertKurikulum',
        'matkulkurikulum': 'InsertMatkulKurikulum',
        'kelaskuliah': 'InsertKelasKuliah',
        'pesertakelaskuliah': 'InsertPesertaKelasKuliah',
        'dosenpengajarkelaskuliah': 'InsertDosenPengajarKelasKuliah',
        'perkuliahanmahasiswa': 'InsertPerkuliahanMahasiswa',
        'aktivitas': 'InsertAktivitasMahasiswa',
        'anggotaaktivitas': 'InsertAnggotaAktivitasMahasiswa',
        'lulusdo': 'InsertMahasiswaLulusDO',
        'bimbing': 'InsertBimbingMahasiswa',
        'uji': 'InsertUjiMahasiswa',
        'nilaiperkuliahan': 'InsertNilaiPerkuliahan',
        'prestasimahasiswa': 'InsertPrestasiMahasiswa'
      }
      if (this.destination !== null) {
        store.dispatch(dispatchdest[this.destination])
        this.tableData = []
        this.tableHeader = []
        this.disablekirim = true
      }
    },
    handleDownload() {
      this.destination = store.getters.destination
      const dispatchdest = {
        'riwayatpendidikan': 'riwayat-pendidikan-mahasiswa',
        'matakuliah': 'mata-kuliah',
        'kurikulum': 'kurikulum',
        'matkulkurikulum': 'matkul-kurikulum',
        'kelaskuliah': 'kelas-kuliah',
        'pesertakelaskuliah': 'peserta-kelas-kuliah',
        'dosenpengajarkelaskuliah': 'dosen-pengajar-kelas-kuliah',
        'perkuliahanmahasiswa': 'aktivitas-kuliah-mahasiswa',
        'aktivitas': 'aktivitas-mahasiswa',
        'anggotaaktivitas': 'anggota-aktivitas-mahasiswa',
        'lulusdo': 'mahasiswa-lulus-do',
        'bimbing': 'bimbing-mahasiswa',
        'uji': 'uji-mahasiswa',
        'prestasimahasiswa': 'prestasi-mahasiswa'
      }
      if (this.destination !== null) {
        // store.dispatch(dispatchdest[this.destination])
        // this.tableData = []
        // this.tableHeader = []
        // this.disablekirim = true
        // test
        const remote = require('electron').remote
        const fileContents = fs.readFileSync(path.join(remote.getGlobal('__static'), `/contoh-${dispatchdest[this.destination]}.xlsx`))
        console.log(fileContents)
        const blob = new Blob([fileContents], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        saveAs(blob, `contoh-${dispatchdest[this.destination]}.xlsx`)
      }
      // store.dispatch('GetContoh')
      // const remote = require('electron').remote
      // const fileContents = fs.readFileSync(path.join(remote.getGlobal('__static'), '/contoh-aktivitas.xlsx'))
      // console.log(fileContents)
      // const blob = new Blob([fileContents], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      // saveAs(blob, `contohakt.xlsx`)
    }
  }
}
</script>

<style scoped>
.el-button {
  display: block;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: auto;
  margin-left: auto;
  width: auto;
  text-align: center;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .placeholder-container div {
  margin: 10px;
  }
  .smallCell
  {
      width: 1px;
      white-space: nowrap;
  }

</style>
