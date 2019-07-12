<template>
  <div class="block">
    <el-table border :data='tableAkta' :show-header="false">
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
      activeName: 'first',
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

      // timeline: [
      //   {
      //     timestamp: '2019/4/20',
      //     title: 'Update Github template',
      //     content: 'PanJiaChen committed 2019/4/20 20:46'
      //   },
      //   {
      //     timestamp: '2019/4/21',
      //     title: 'Update Github template',
      //     content: 'PanJiaChen committed 2019/4/21 20:46'
      //   },
      //   {
      //     timestamp: '2019/4/22',
      //     title: 'Build Template',
      //     content: 'PanJiaChen committed 2019/4/22 20:46'
      //   },
      //   {
      //     timestamp: '2019/4/23',
      //     title: 'Release New Version',
      //     content: 'PanJiaChen committed 2019/4/23 20:46'
      //   }
      // ]
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
        this.tableAkta[0].isi = this.profil.sk_pendirian
        this.tableAkta[1].isi = this.profil.tanggal_sk_pendirian
        this.tableAkta[2].isi = this.profil.nama_status_milik
        this.tableAkta[3].isi = this.profil.status_perguruan_tinggi
        this.tableAkta[4].isi = this.profil.sk_izin_operasional
        this.tableAkta[5].isi = this.profil.tanggal_izin_operasional
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>