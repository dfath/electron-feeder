<template>
  <div class="app-container">
    <el-form size=mini ref="form" label-width="120px" v-loading="loading">
      <el-form-item label="Jenis Prestasi" required>
        <el-select v-model="setPrestasi.nama_jenis_prestasi" :value="id_jenis_prestasi" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of jenisdaftaroption" :key="item" :label="item.nama_jenis_prestasi" :value="item.id_jenis_prestasi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Tingkat Prestasi" required>
        <el-select v-model="setPrestasi.nama_tingkat_prestasi" :value="id_tingkat_prestasi" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of jenisdaftaroption" :key="item" :label="item.nama_tingkat_prestasi" :value="item.id_tingkat_prestasi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Nama Prestasi" required>
        <el-input type="textarea" v-model="setAktivitas.nama_prestasi"></el-input>
      </el-form-item>
      <el-form-item label="Tahun" required>
        <el-input v-model="setPrestasi.tahun_prestasi" disabled></el-input>
      </el-form-item>
      <el-form-item label="Penyelenggara">
        <el-input v-model="setPrestasi.penyelenggara" :value="setPrestasi.id_perguruan_tinggi" disabled></el-input>
      </el-form-item>
      <el-form-item label="Peringkat">
        <el-select v-model="setPrestasi.peringkat" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of prodioption" :key="item" :label="item.nama_jenjang_pendidikan + ' ' + item.nama_program_studi" :value="item.peringkat"></el-option>
        </el-select>
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
      prodioption: [],
      loading: false
    }
  },
  created() {
    store.dispatch('GetProdi').then(() => {
      this.prodioption = store.getters.prodi
      console.log(this.prodioption)
    })
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
    onSubmit() {
      console.log(store.getters.listprestasimahasiswa[0])
      this.loading = false
      // store.dispatch('UpdateRiwayatPendidikanMahasiswa').then(() => {
      //   this.loading = false
      // })
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

