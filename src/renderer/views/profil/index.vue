<template>
  <div class='app-container'>   
    <div>
      <el-table border :data='tableProfilPT'>
        <el-table-column min-width='50' prop='name' label=''></el-table-column>
        <el-table-column min-width='150' prop='isi'>
        </el-table-column>
      </el-table>
    </div>
    <br>
    <br>
    <div>
      <el-tabs type='border-card'>
        <el-tab-pane>
          <span slot='label'><i class='el-icon-location-outline'></i> Alamat</span>
          Alamat
          <el-table border :data='tableAlamat'>
            <el-table-column min-width='50' prop='name'></el-table-column>
            <el-table-column min-width='150' prop='isi'>
            </el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane>
          <span slot='label'><i class='el-icon-info'></i> Informasi PT</span>
          Informasi PT

          <el-table border :data='tableInfoPT'>
            <el-table-column min-width='50' prop='name'></el-table-column>
            <el-table-column min-width='150' prop='isi'>
            </el-table-column>
          </el-table>


        </el-tab-pane>
        <el-tab-pane>
          <span slot='label'><i class='el-icon-document'></i> Akta Pendirian</span>
          Akta Pendirian
        </el-tab-pane>
        <el-tab-pane>
          <span slot='label'><i class='el-icon-news'></i> Program Studi</span>
          Program Studi
          <el-table border :data='tableData'>
            <el-table-column min-width='50' type='index'></el-table-column>
            <el-table-column min-width='150' prop='name'
                            label='Name'>
            </el-table-column>
            <el-table-column min-width='200' prop='job'
                            label='Job Position'>
            </el-table-column>
            <el-table-column min-width='150' prop='salary'
                            label='Salary'>
            </el-table-column>
<<<<<<< HEAD
            <el-table-column min-width='150'
                            header-align='right'
                            label='Actions'>
              <div slot-scope='' class='text-right'>
                <el-tooltip content='Info'
                            :open-delay='300'
                            placement='top'>
                  <p-button type='info' size='sm' icon>
                    <i class='nc-icon nc-alert-circle-i'></i>
=======
            <el-table-column min-width="150"
                            header-align="right"
                            label="Actions">
              <div slot-scope="" class="text-right">
                <el-tooltip content="Info"
                            :open-delay="300"
                            placement="top">
                  <p-button type="info" size="sm" icon>
                    <i class="nc-icon nc-alert-circle-i"></i>
>>>>>>> viewmahasiswa
                  </p-button>
                </el-tooltip>


                <el-tooltip content='Settings'
                            :open-delay='300'
                            placement='top'>
                  <p-button type='success' size='sm' icon>
                    <i class='nc-icon nc-settings'></i>
                  </p-button>
                </el-tooltip>

                <el-tooltip content='Delete'
                            :open-delay='300'
                            placement='top'>
                  <p-button type='danger' size='sm' icon>
                    <i class='nc-icon nc-simple-delete'></i>
                  </p-button>
                </el-tooltip>

              </div>
            </el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane>
          <span slot='label'><i class='el-icon-date'></i> Periode Pelaporan Pengajuan</span>
          Periode Pelaporan Pengajuan
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getProfilPT()
  },
  data() {
    return {
      list: null,
      listLoading: true,
      activeName: 'first',
      profil: null,
      tableProfilPT: [{
        name: 'Kode PT',
        isi: ''
      },
      {
        name: 'Nama PT',
        isi: ''
      },
      {
        name: 'Telepon',
        isi: ''
      },
      {
        name: 'Faxmile',
        isi: ''
      },
      {
        name: 'Email',
        isi: ''
      },
      {
        name: 'Website',
        isi: ''
      }],

      tableInfoPT: [{
        name: 'Bank',
        isi: 'Bank BNI'
      },
      {
        name: 'Unit Cabang',
        isi: 'Cabang Bandung'
      },
      {
        name: 'Nomor Rekening',
        isi: '700000'
      },
      {
        name: 'MBS',
        isi: '0'
      },
      {
        name: 'Luas Tanah Milik',
        isi: '0'
      },
      {
        name: 'Luas Tanah Milik',
        isi: '0'
      }],
      tableAlamat: [{
        name: 'Jalan',
        isi: ''
      },
      {
        name: 'Dusun',
        isi: ''
      },
      {
        name: 'RT/RW',
        isi: ''
      },
      {
        name: 'Kelurahan',
        isi: ''
      },
      {
        name: 'Kodepos',
        isi: ''
      },
      {
        name: 'Kecamatan',
        isi: ''
      },
      {
        name: 'Lintang Bujur',
        isi: ''
      }]
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
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
<<<<<<< HEAD
        this.listLoading = true
=======
        this.loading = true
>>>>>>> viewmahasiswa
        this.profil = this.$store.getters.profilPT
        console.log(this.$store.getters.profilPT)
        console.log(this.profil)
        this.tableProfilPT[0].isi = this.profil.kode_perguruan_tinggi
        this.tableProfilPT[1].isi = this.profil.nama_perguruan_tinggi
        this.tableProfilPT[2].isi = this.profil.telepon
        this.tableProfilPT[3].isi = this.profil.faximile
        this.tableProfilPT[4].isi = this.profil.email
        this.tableProfilPT[5].isi = this.profil.website

        // Alamat
        this.tableAlamat[0].isi = this.profil.jalan
        this.tableAlamat[1].isi = this.profil.dusun
        this.tableAlamat[2].isi = this.profil.rt_rw
        this.tableAlamat[3].isi = this.profil.kelurahan
        this.tableAlamat[4].isi = this.profil.kode_pos
        this.tableAlamat[5].isi = this.profil.nama_wilayah
        this.tableAlamat[6].isi = this.profil.lintang_bujur
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>
