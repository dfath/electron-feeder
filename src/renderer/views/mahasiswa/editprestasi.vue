<template>
  <div class="app-container">
    <el-form size=mini ref="form" label-width="120px" v-loading="listLoading">
      <el-form-item label="Jenis Prestasi" required>
        <el-select v-model="setPrestasi.id_jenis_prestasi" placeholder="Pilih Jenis Prestasi">
          <el-option v-for="prestasi of jenisprestasioption" :key="prestasi.id_jenis_prestasi" :label="prestasi.nama_jenis_prestasi" :value="prestasi.id_jenis_prestasi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Tingkat Prestasi" required>
        <el-select v-model="setPrestasi.id_tingkat_prestasi" placeholder="Pilih Tingkat Prestasi">
          <el-option v-for="tingkat of tingkatprestasioption" :key="tingkat.id_tingkat_prestasi" :label="tingkat.nama_tingkat_prestasi" :value="tingkat.id_tingkat_prestasi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Nama Prestasi" required>
        <el-input type="textarea" v-model="setPrestasi.nama_prestasi"></el-input>
      </el-form-item>
      <el-form-item label="Tahun" required>
        <el-input v-model="setPrestasi.tahun_prestasi"></el-input>
      </el-form-item>
      <el-form-item label="Penyelenggara">
        <el-input v-model="setPrestasi.penyelenggara" :value="setPrestasi.id_perguruan_tinggi"></el-input>
      </el-form-item>
      <el-form-item label="Peringkat">
        <el-input v-model="setPrestasi.peringkat" :value="setPrestasi.id_perguruan_tinggi"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Update</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      jenisprestasioption: [],
      tingkatprestasioption: [],
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    setPrestasi: {
      get() {
        return store.getters.listprestasimahasiswa[0]
      },
      set(value) {
        store.commit('GET_LIST_PRESTASI_MAHASISWA', value)
      }
    }
  },
  methods: {
    fetchData() {
      this.getJenisPrestasi()
      this.getTingkatPrestasi()
    },
    getJenisPrestasi() {
      store.dispatch('GetJenisPrestasi').then(() => {
        this.jenisprestasioption = store.getters.jenisprestasi
        console.log('ini jenisprestasi dari store ke sini ', this.jenisprestasi)
      })
    },
    getTingkatPrestasi() {
      store.dispatch('GetTingkatPrestasi').then(() => {
        this.tingkatprestasioption = store.getters.tingkatprestasi
      })
    },
    onSubmit() {
      console.log(store.getters.listprestasimahasiswa[0])
      this.listLoading = true
      store.dispatch('UpdatePrestasiMahasiswa').then(() => {
        this.listLoading = false
      })
    },
    onCancel() {
      this.$router.push('/mahasiswa/edit')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

