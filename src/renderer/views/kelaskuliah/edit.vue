<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" v-loading="loading">
      <el-form-item label="Program Studi" required="true">
        <el-input v-model="setKelasKuliah.nama_program_studi" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Semester" required="true">
        <el-input v-model="setKelasKuliah.id_semester" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Mata Kuliah" required="true" >
        <el-input v-model="setKelasKuliah.nama_mata_kuliah" disabled="true"></el-input>
      </el-form-item>
      <!-- <el-form-item label="Bobot Mata Kuliah">
        <el-input v-model="setKelasKuliah.jumlah_sks_lulus"></el-input>
      </el-form-item>
      <el-form-item label="Bobot Tatap Muka">
        <el-input v-model="setKelasKuliah.jumlah_sks_wajib"></el-input> sks
      </el-form-item>
      <el-form-item label="Bobot Praktikum">
        <el-input v-model="setKelasKuliah.jumlah_sks_pilihan"></el-input> sks
      </el-form-item>
      <el-form-item label="Bobot Praktek Lapangan">
        <el-input v-model="setKelasKuliah.jumlah_sks_pilihan"></el-input> sks
      </el-form-item>
      <el-form-item label="Bobot Simulasi">
        <el-input v-model="setKelasKuliah.jumlah_sks_pilihan"></el-input> sks
      </el-form-item> -->
      <el-form-item label="Nama Kelas" required="true">
        <el-input v-model="setKelasKuliah.nama_kelas_kuliah"></el-input>
      </el-form-item>
      <el-form-item label="Bahasan">
        <el-input type="textarea" v-model="setKelasKuliah.bahasan"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal Mulai Efektif">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setKelasKuliah.tanggal_mulai_efektif" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Tanggal Akhir Efektif">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setKelasKuliah.tanggal_akhir_efektif" style="width: 100%;"></el-date-picker>
        </el-col>
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
      loading: false,
      checkList: ['selected and disabled', 'Option A'],
      nama_kebutuhan_khusus: ['A - Tuna netra', 'B - Tuna rungu']
      // rules: {
      //   butuh: [
      //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
      //     { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      //   ],
      //   takbisa: [
      //     { disabled: true }
      //   ]
      // }
    }
  },
  computed: {
    setKelasKuliah: {
      get() {
        return store.getters.updatekelaskuliah[0]
      },
      set(value) {
        store.commit('GET_DETAIL_KELAS_KULIAH', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.updatekelaskuliah[0])
      this.loading = true
      store.dispatch('UpdateKelasKuliah').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/kelaskuliah/listkelaskuliah')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

