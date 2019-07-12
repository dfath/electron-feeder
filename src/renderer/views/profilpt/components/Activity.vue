<template>
  <div class="user-activity">
    <div class="post">
      <el-table border :data='tableAlamat' :show-header="false">
        <el-table-column min-width='50' prop='name'></el-table-column>
        <el-table-column min-width='150' prop='isi'>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'
export default {
  created() {
    this.getProfilPT()
  },
  data() {
    return {
      carouselImages: [
        'https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg',
        'https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg',
        'https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg',
        'https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg'
      ],
      avatarPrefix,
      carouselPrefix,
      list: null,
      listLoading: true,
      activeName: 'first',
      profil: null,
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
.user-activity {
  .user-block {
    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }
    .username{
      font-size: 16px;
      color: #000;
    }
    :after {
      clear: both;
    }
    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }
    span {
      font-weight: 500;
      font-size: 12px;
    }
  }
  .post {
    font-size: 16px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;
    .image {
      width: 100%;
      height: 100%;
    }
    .user-images {
      padding-top: 20px;
    }
  }
  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;
    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }
    .link-black {
      &:hover,
      &:focus {
        color: #999;
      }
    }
  }
}
.box-center {
  margin: 0 auto;
  display: table;
}
.text-muted {
  color: #777;
}
.right {
  float: right;
}
.bold {
  font-weight: bold;
  color: #1A69B6;
  font-size: 16px;
}
</style>
