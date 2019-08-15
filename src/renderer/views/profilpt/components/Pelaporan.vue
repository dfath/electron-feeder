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
      style="width: 100%"
      :cell-style="{padding: '0px', height: '37px'}"
      max-height="500"
      size=mini
      stripe
    >
      <el-table-column
        prop="kode_prodi"
        label="Kode Program Studi"
        min-width="150"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="nama_program_studi"
        label="Nama Program Studi"
        min-width="150"
        header-align="center"
      >
      </el-table-column>
      <el-table-column
        prop="status_prodi"
        label="Status"
        min-width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="jenjang_pendidikan"
        label="Jenjang"
        min-width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="periode_pelaporan"
        label="Periode Pelaporan"
        min-width="150"
        align="center"
      >
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
