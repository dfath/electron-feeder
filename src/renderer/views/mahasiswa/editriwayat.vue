<template>
  <div class="app-container">
    <el-form size=mini ref="form" label-width="120px" v-loading="loading">
      <el-form-item label="NIM" required>
        <el-input v-model="setRiwayatPendidikan.nim"></el-input>
      </el-form-item>
      <el-form-item label="Jenis Pendaftaran" required>
        <!-- https://github.com/vuejs/vue-loader/issues/715 -->
        <el-select v-model="setRiwayatPendidikan.id_jenis_daftar" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of jenisdaftaroption" :key="item" :label="item.nama_jenis_daftar" :value="item.id_jenis_daftar"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Jalur Pendaftaran" required>
        <el-select v-model="setRiwayatPendidikan.id_jalur_daftar" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of jenisdaftaroption" :key="item" :label="item.nama_jalur_daftar" :value="item.id_jalur_daftar"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Periode Pendaftaran" required>
        <el-input v-model="setRiwayatPendidikan.nama_periode_masuk" :value="setRiwayatPendidikan.id_periode_masuk" disabled></el-input>
      </el-form-item>
      <el-form-item label="Tanggal Masuk" required>
        <el-date-picker type="date" placeholder="Pick a date" v-model="setRiwayatPendidikan.tanggal_daftar" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Pembiayaan Awal">
        <el-select v-model="setRiwayatPendidikan.id_pembiayaan" placeholder="Pilih pembiayaan awal">
          <el-option v-for="item of jenisdaftaroption" :key="item" :label="item.nama_pembiayaan_awal" :value="item.id_pembiayaan"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Perguruan Tinggi" required>
        <el-input v-model="setRiwayatPendidikan.nama_perguruan_tinggi" :value="setRiwayatPendidikan.id_perguruan_tinggi" disabled></el-input>
      </el-form-item>
      <el-form-item label="Program Studi" required>
        <el-select v-model="setRiwayatPendidikan.id_prodi" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of prodioption" :key="item" :label="item.nama_jenjang_pendidikan + ' ' + item.nama_program_studi" :value="item.id_prodi"></el-option>
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
      jenisdaftaroption: [],
      prodioption: [],
      loading: false
    }
  },
  created() {
    store.dispatch('GetJenisPendaftaran').then(() => {
      this.jenisdaftaroption = store.getters.jenispendaftaran
      console.log('ini jenisdaftaroption dari store ke sini ', this.jenisdaftaroption)
      console.log(store.getters.listriwayatpendidikanmahasiswa[0])
    })

    store.dispatch('GetProdi').then(() => {
      this.prodioption = store.getters.prodi
      console.log(this.prodioption)
    })
  },
  computed: {
    setRiwayatPendidikan: {
      get() {
        return store.getters.listriwayatpendidikanmahasiswa[0]
      },
      set(value) {
        store.commit('GET_LIST_RIWAYAT_PENDIDIKAN_MAHASISWA', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.listriwayatpendidikanmahasiswa[0])
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

