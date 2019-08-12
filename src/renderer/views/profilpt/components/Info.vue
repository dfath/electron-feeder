<template>
  <div class="block">
    <el-table 
      border 
      :data='tableInfoPT' 
      :show-header="false"
      :cell-style="{padding: '0px', height: '37px'}"
      max-height="500"
      size=mini
      stripe
    >
      <el-table-column min-width='100' prop='name'></el-table-column>
      <el-table-column min-width='100' prop='isi'>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  created() {
    this.getProfilPT()
  },
  data() {
    return {
      listLoading: true,
      profil: null,
      tableInfoPT: [{
        name: 'Bank',
        isi: ''
      },
      {
        name: 'Unit Cabang',
        isi: ''
      },
      {
        name: 'Nomor Rekening',
        isi: ''
      },
      {
        name: 'MBS',
        isi: ''
      },
      {
        name: 'Luas Tanah Milik',
        isi: ''
      },
      {
        name: 'Luas Tanah Bukan Milik',
        isi: ''
      }]
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    getProfilPT() {
      this.listLoading = true
      this.$store.dispatch('GetProfilPT').then(() => {
        this.listLoading = true
        this.profil = this.$store.getters.profilPT
        console.log(this.$store.getters.profilPT)
        console.log(this.profil)

        // Informasi PT
        this.tableInfoPT[0].isi = this.profil[0].bank
        this.tableInfoPT[1].isi = this.profil[0].unit_cabang
        this.tableInfoPT[2].isi = this.profil[0].nomor_rekening
        this.tableInfoPT[3].isi = this.profil[0].kelurahan
        this.tableInfoPT[4].isi = this.profil[0].mbs
        this.tableInfoPT[5].isi = this.profil[0].luas_tanah_milik
        this.tableInfoPT[6].isi = this.profil[0].luas_tanah_bukan_milik
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>
