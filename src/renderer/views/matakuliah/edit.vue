<template>
  <div class="app-container">
    <el-form size=mini ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Kode Mata Kuliah">
        <el-input v-model="setMatkul.kode_mata_kuliah"></el-input>
      </el-form-item>
      <el-form-item label="Nama Mata Kuliah">
        <el-input v-model="setMatkul.nama_mata_kuliah"></el-input>
      </el-form-item>
      <el-form-item label="Program Studi Pengampu">
        <!-- https://github.com/vuejs/vue-loader/issues/715 -->
        <el-select v-model="setMatkul.id_prodi" placeholder="Please select your program studi pengampu">
          <el-option v-for="item of prodioption" :key="item" :label="item.nama_jenjang_pendidikan + ' ' + item.nama_program_studi" :value="item.id_prodi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Jenis Mata Kuliah">
        <el-radio-group v-model="setMatkul.id_jenis_mata_kuliah">
          <el-radio label="E">Wajib Nasional</el-radio>
          <el-radio label="A">Wajib Program Studi</el-radio>
          <el-radio label="B">Pilihan</el-radio>
          <el-radio label="C">Peminatan</el-radio>
          <el-radio label="D">Tugas akhir/Skripsi/Tesis/Disertasi</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Bobot Mata Kuliah (sks)">
        <el-input v-model="setMatkul.sks_mata_kuliah"></el-input>
      </el-form-item>
      <el-form-item label="Bobot Tatap Muka (sks)">
        <el-input v-model="setMatkul.sks_tatap_muka"></el-input>
      </el-form-item>
      <el-form-item label="Bobot Praktikum (sks)">
        <el-input v-model="setMatkul.sks_praktek"></el-input>
      </el-form-item>
      <el-form-item label="Bobot Praktek Lapangan (sks)">
        <el-input v-model="setMatkul.sks_praktek_lapangan"></el-input>
      </el-form-item>
      <el-form-item label="Bobot Simulasi (sks)">
        <el-input v-model="setMatkul.sks_simulasi"></el-input>
      </el-form-item>
      <el-form-item label="Metode Pembelajaran">
        <el-input v-model="setMatkul.metode_kuliah"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal Mulai Efektif">
        <el-date-picker type="date" placeholder="Pick a date" v-model="setMatkul.tanggal_mulai_efektif" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Tanggal Akhir Efektif">
        <el-date-picker type="date" placeholder="Pick a date" v-model="setMatkul.tanggal_selesai_efektif" style="width: 100%;"></el-date-picker>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      prodioption: [],
      loading: false,
      checkList: ['selected and disabled', 'Option A'],
      nama_kebutuhan_khusus: ['A - Tuna netra', 'B - Tuna rungu']

    }
  },
  created() {
    store.dispatch('GetProdi').then(() => {
      this.prodioption = store.getters.prodi
      console.log(this.prodioption)
    })
  },
  computed: {
    setMatkul: {
      get() {
        return store.getters.updatematakuliah[0]
      },
      set(value) {
        store.commit('GET_DETAIL_MATA_KULIAH', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.updatematakuliah[0])
      this.loading = true
      store.dispatch('UpdateMataKuliah').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/matakuliah/listmatakuliah')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

