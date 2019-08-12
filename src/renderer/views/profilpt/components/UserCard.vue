<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>Profil PT</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
          <div class="user-name"><svg-icon class-name="size-icon" icon-class="peoples" /></div>
      </div>
      <div class="box-center">
        <!-- <div class="user-name text-center">{{ user.name }}</div> -->
      </div>
    </div>

    <div class="user-bio">

      <div class="user-skills user-bio-section">
        <!-- <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>Profil PT</span></div> -->
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span class="bold">Kode PT</span>
            <span class="right">{{ this.profil[0].kode_perguruan_tinggi }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Nama PT</span>
            <span class="right">{{ this.profil[0].nama_perguruan_tinggi }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Telepon</span>
            <span class="right">{{ this.profil[0].telepon }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Faxmile</span>
            <span class="right">{{ this.profil[0].faximile }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Email</span>
            <span class="right">{{ this.profil[0].email }}</span>
            <hr>
          </div>
          <div class="progress-item">
            <span class="bold">Website</span>
            <span class="right">{{ this.profil[0].website }}</span>
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
  // props: {
  //   user: {
  //     type: Object,
  //     default: () => {
  //       return {
  //         name: '',
  //         email: '',
  //         avatar: '',
  //         roles: ''
  //       }
  //     }
  //   }
  // },

  created() {
    this.getProfilPT()
  },
  data() {
    return {
      listLoading: true,
      profil: null
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
     font-size: 25px;
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
 .size-icon {
   height: 100px;
   width: 200px;
 }
</style>
