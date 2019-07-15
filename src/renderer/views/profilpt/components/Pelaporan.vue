<template>
  <div class="app-container">
    <!-- Keterangan 

    1. Menampilkan periode yang dibukakan di luar periode aktif pada setiap program studi. 
    2. Periode perlaporan yang terbuka untuk prodi berstatus aktif, antara lain : 
      - 2018/2019 Genap
      - 2018/2019 Pendek
      - 2019/2020 Ganjil
    3. Untuk pelaporan di luar periode aktif, Admin PT dapat melakukan pengajuan periode pelaporan pada laman forlap terlebih dahulu. -->
    <el-table
      :data="periode"
      border
      height="250"
      style="width: 100%">
      <el-table-column
        prop="kode_prodi"
        label="Kode Program Studi"
        width="175">
      </el-table-column>
      <el-table-column
        prop="nama_program_studi"
        label="Nama Program Studi"
        width="170">
      </el-table-column>
      <el-table-column
        prop="status_prodi"
        label="Status"
        width="75">
      </el-table-column>
      <el-table-column
        prop="jenjang_pendidikan"
        label="Jenjang"
        width="88">
      </el-table-column>
      <el-table-column
        prop="periode_pelaporan"
        label="Periode Pelaporan"
        width="150">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.getPeriode()
  },
  data() {
    return {
      listLoading: true,
      periode: []
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getPeriode() {
      this.listLoading = true
      this.$store.dispatch('GetPeriode').then(() => {
        this.listLoading = true
        this.periode = this.$store.getters.periode
        console.log(this.$store.getters.periode)
        // Periode
        console.log(this.periode)
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>
