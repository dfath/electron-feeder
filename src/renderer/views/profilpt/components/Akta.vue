<template>
  <div class="block">
    <el-table 
      border 
      :data='tableAkta' 
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
      tableAkta: [{
        name: 'No SK Pendirian',
        isi: ''
      },
      {
        name: 'Tanggal SK Pendirian',
        isi: ''
      },
      {
        name: 'Status Kepemilikan',
        isi: ''
      },
      {
        name: 'Status Perguruan Tinggi',
        isi: ''
      },
      {
        name: 'SK Izin Operasional',
        isi: ''
      },
      {
        name: 'Tanggal Izin Operasional',
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
        this.tableAkta[0].isi = this.profil[0].sk_pendirian
        this.tableAkta[1].isi = this.profil[0].tanggal_sk_pendirian
        this.tableAkta[2].isi = this.profil[0].nama_status_milik
        this.tableAkta[3].isi = this.profil[0].status_perguruan_tinggi
        this.tableAkta[4].isi = this.profil[0].sk_izin_operasional
        this.tableAkta[5].isi = this.profil[0].tanggal_izin_operasional
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>