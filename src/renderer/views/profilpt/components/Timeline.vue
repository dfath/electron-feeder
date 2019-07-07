<template>
  <div class="block">
    <!-- <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline> -->

    <el-table border :data='tableInfoPT'>
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
        this.tableInfoPT[0].isi = this.profil.bank
        this.tableInfoPT[1].isi = this.profil.unit_cabang
        this.tableInfoPT[2].isi = this.profil.nomor_rekening
        this.tableInfoPT[3].isi = this.profil.kelurahan
        this.tableInfoPT[4].isi = this.profil.mbs
        this.tableInfoPT[5].isi = this.profil.luas_tanah_milik
        this.tableInfoPT[6].isi = this.profil.luas_tanah_bukan_milik
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>
