<template>
  <div class="app-container">
    (data periode 2019/2020 Ganjil)
    <el-table
      :data="prodi"
      border
      height="250"
      style="width: 100%">
      <el-table-column
        prop="kode_program_studi"
        label="Kode Program Studi"
        width="125">
      </el-table-column>
      <el-table-column
        prop="nama_program_studi"
        label="Nama Program Studi"
        width="170">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="75">
      </el-table-column>
      <el-table-column
        prop="nama_jenjang_pendidikan"
        label="Jenjang"
        width="75">
      </el-table-column>
      <el-table-column
        prop=""
        label="Jumlah Mahasiswa">
      </el-table-column>
      <el-table-column
        prop=""
        label="Jumlah Dosen"
        width="80">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.getProdi()
  },
  data() {
    return {
      listLoading: true,
      prodi: [],
      tableDataSebelumnya: [{
        kode: '48401',
        nama: 'Farmasi',
        status: 'A'
      }, {
        kode: '48201',
        nama: 'Farmasi',
        status: 'A'
      }, {
        kode: '',
        nama: '',
        status: ''
      }, {
        kode: '48901',
        nama: 'Profesi Apoteker',
        status: 'A'
      }, {
        kode: 'kodetes4',
        nama: 'namates4',
        status: 'statustes4'
      }]

    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getProdi() {
      this.listLoading = true
      this.$store.dispatch('GetProdi').then(() => {
        this.listLoading = true
        this.prodi = this.$store.getters.prodi
        console.log(this.$store.getters.prodi)

        // Prodi
        console.log(this.prodi)
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>
