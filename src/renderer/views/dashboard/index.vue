<template>
  <div style="text-align: center;" class="dashboard-container">
    <img style=" width: 100px; height: 100px;"  src="static/openfeederlogo.svg">
    <div class="dashboard-text">Selamat Datang di OpenFeeder v1.0.0</div>
    <p>Untuk panduan aplikasi ini, <a>lihat dokumentasi OpenFeeder</a>.</p>
    <el-button class="filter-item" type="success" icon="el-icon-upload2" @click="handleDownload">
              Download file
    </el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import fs from 'fs'
import path from 'path'
// import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
    handleDownload() {
      const remote = require('electron').remote
      const fileContents = fs.readFileSync(path.join(remote.getGlobal('__static'), '/contoh-aktivitas.xlsx'))
      console.log(fileContents)
      const blob = new Blob([fileContents], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
      saveAs(blob, `contohakt.xlsx`)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    margin-top: 1.5rem;
  }
}
</style>
