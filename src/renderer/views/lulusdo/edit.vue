<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Mahasiswa" required="true">
        <el-input v-model="setLulusDO.id_registrasi_mahasiswa" disabled="true"></el-input>
      </el-form-item>
      <!-- gimana masukin nim coba -->
      <el-form-item label="Jenis Keluar" required="true">
        <el-select v-model="setLulusDO.id_jenis_keluar" placeholder="Please select your activity">
          <el-option label="Lulus" value="1"></el-option>
          <el-option label="Mutasi" value="2"></el-option>
          <el-option label="Dikeluarkan" value="3"></el-option>
          <el-option label="Mengundurkan diri" value="4"></el-option>
          <el-option label="Putus sekolah" value="5"></el-option>
          <el-option label="Wafat" value="6"></el-option>
          <el-option label="Hilang" value="7"></el-option>
          <el-option label="Lainnya" value="Z"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Tanggal Keluar" required="true">
        <el-date-picker type="date" placeholder="Pick a date" v-model="setLulusDO.tanggal_keluar" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Keterangan">
        <el-input type="textarea" v-model="setLulusDO.keterangan"></el-input>
      </el-form-item>
      <el-form-item label="Nomor SK">
        <el-input v-model="setLulusDO.nomor_sk_yudisium"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal SK">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setLulusDO.tanggal_sk_yudisium" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="IPK">
        <el-input v-model="setLulusDO.ipk"></el-input>
      </el-form-item>
      <el-form-item label="No seri Ijazah / No sertifikat profesi">
        <el-input v-model="setLulusDO.nomor_ijazah"></el-input>
      </el-form-item>
      <!-- <el-form-item label="No seri Ijazah / No sertifikat profesi">
        <el-input v-model="setLulusDO.nomor_ijazah"></el-input>
      </el-form-item>
      <el-form-item label="No seri Ijazah / No sertifikat profesi">
        <el-input v-model="setLulusDO.nomor_ijazah"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal SK">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setLulusDO.tanggal_sk_yudisium" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Tanggal SK">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setLulusDO.tanggal_sk_yudisium" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item> -->

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
    setLulusDO: {
      get() {
        return store.getters.updatelulusdo[0]
      },
      set(value) {
        store.commit('GET_DETAIL_MAHASISWA_LULUS_DO', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.updatelulusdo[0])
      this.loading = true
      store.dispatch('UpdateMahasiswaLulusDO').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/lulusdo/listlulusdo')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

