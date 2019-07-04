<template>
  <div class="app-container">
    <div>
      <el-table border :data="tableProfilPTygbenar">
        <el-table-column min-width="50" prop="name" label=""></el-table-column>
        <el-table-column min-width="150" prop="isi">{{ this.tableProfilPTygbenar.isi }}
        </el-table-column>
      </el-table>
    </div>
    <br>
    <br>
    <div>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-location-outline"></i> Alamat</span>
          Alamat
          <el-table border :data="tableAlamat">
            <el-table-column min-width="50" prop="name"></el-table-column>
            <el-table-column min-width="150" prop="isi">
            </el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-info"></i> Informasi PT</span>
          Informasi PT

          <el-table border :data="tableInfoPT">
            <el-table-column min-width="50" prop="name"></el-table-column>
            <el-table-column min-width="150" prop="isi">
            </el-table-column>
          </el-table>


        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-document"></i> Akta Pendirian</span>
          Akta Pendirian
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-news"></i> Program Studi</span>
          Program Studi
          <el-table border :data="tableData">
            <el-table-column min-width="50" type="index"></el-table-column>
            <el-table-column min-width="150" prop="name"
                            label="Name">
            </el-table-column>
            <el-table-column min-width="200" prop="job"
                            label="Job Position">
            </el-table-column>
            <el-table-column min-width="150" prop="salary"
                            label="Salary">
            </el-table-column>
            <el-table-column min-width="150"
                            header-align="right"
                            label="Actions">
              <div slot-scope="{row}" class="text-right">
                <el-tooltip content="Info"
                            :open-delay="300"
                            placement="top">
                  <p-button type="info" size="sm" icon>
                    <i class="nc-icon nc-alert-circle-i"></i>
                  </p-button>
                </el-tooltip>


                <el-tooltip content="Settings"
                            :open-delay="300"
                            placement="top">
                  <p-button type="success" size="sm" icon>
                    <i class="nc-icon nc-settings"></i>
                  </p-button>
                </el-tooltip>

                <el-tooltip content="Delete"
                            :open-delay="300"
                            placement="top">
                  <p-button type="danger" size="sm" icon>
                    <i class="nc-icon nc-simple-delete"></i>
                  </p-button>
                </el-tooltip>

              </div>
            </el-table-column>
          </el-table>

        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> Periode Pelaporan Pengajuan</span>
          Periode Pelaporan Pengajuan
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  created() {
    this.getProfilPT()
  },
  data() {
    return {
      list: null,
      listLoading: true,
      activeName: 'first',
      profil: [],
      tableProfilPTygbenar: [{
        name: 'Kode PT',
        isi: '00000'
      }],
      tableProfil: [{
        name: 'Kode PT',
        isi: '043115'
      },
      {
        name: 'Nama PT',
        isi: 'Sekolah Tinggi Farmasi Bandung'
      },
      {
        name: 'Telepon',
        isi: '7830760'
      },
      {
        name: 'Faxmile',
        isi: '7830760'
      },
      {
        name: 'Email',
        isi: 'contacct@stfb.ac.id'
      },
      {
        name: 'Website',
        isi: 'www.stfb.ac.id'
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
        isi: 'Jalan Soekarno Hatta No 754, Cibiru Bandung'
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
        isi: '40161'
      },
      {
        name: 'Kecamatan',
        isi: 'Kota Bandung'
      },
      {
        name: 'Lintang Bujur',
        isi: 'Bujur'
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
      this.loading = true
      this.$store.dispatch('GetProfilPT').then(() => {
        this.loading = false
        this.profil = this.$store.getters.profilPT
        console.log(this.profil)
        this.tableProfilPTygbenar[0].isi = this.profil[0].kode_perguruan_tinggi
        console.log(this.tableProfilPTygbenar)
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>
