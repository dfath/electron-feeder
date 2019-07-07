<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>Profile PT</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>STFB</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">{{ user.role | uppercaseFirst }}</div>
      </div>
    </div>

    <div class="user-bio">
      <!-- <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Profil PT</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            JS in Computer Science from the University of Technology
          </div>
        </div>
      </div> -->

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>Profil PT</span></div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span class="bold">Kode PT</span>
            <span class="right">{{ this.profil.kode_perguruan_tinggi }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Nama PT</span>
            <span class="right">{{ this.profil.nama_perguruan_tinggi }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Telepon</span>
            <span class="right">{{ this.profil.telepon }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Faxmile</span>
            <span class="right">{{ this.profil.faximile }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Email</span>
            <span class="right">{{ this.profil.email }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Website</span>
            <span class="right">{{ this.profil.website }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Kode PT</span>
            <span class="right">043115</span>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'
export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          roles: ''
        }
      }
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
        this.listLoading = true
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

<style lang="scss" scoped>
 .box-center {
   margin: 0 auto;
   display: table;
 }
 .text-muted {
   color: #777;
 }
 .user-profile {
   .user-name {
     font-weight: bold;
     text-align: center;
   }
   .box-center {
     padding-top: 10px;
   }
   .user-role {
     padding-top: 10px;
     font-weight: 400;
     font-size: 14px;
   }
   .box-social {
     padding-top: 30px;
     .el-table {
       border-top: 1px solid #dfe6ec;
     }
   }
   .user-follow {
     padding-top: 20px;
   }
 }
 .user-bio {
   margin-top: 20px;
   color: #606266;
   span {
     padding-left: 4px;
   }
   .user-bio-section {
     font-size: 14px;
     padding: 15px 0;
     .user-bio-section-header {
       border-bottom: 1px solid #dfe6ec;
       padding-bottom: 10px;
       margin-bottom: 10px;
       font-weight: bold;
     }
   }
   .right {
     float: right;
   }
   .bold {
     font-weight: bold;
     color: #1A69B6;
   }
 }
</style>
