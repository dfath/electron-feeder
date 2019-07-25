<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Program Studi" required="true">
        <el-input v-model="setAktivitas.id_prodi" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Semester" required="true">
        <el-input v-model="setAktivitas.id_semester" disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Jenis Aktivitas" required="true">
        <el-select v-model="setAktivitas.id_jenis_aktivitas" placeholder="Please select your activity">
          <el-option label="Laporan akhir studi" value="1"></el-option>
          <el-option label="Tugas akhir" value="2"></el-option>
          <el-option label="Tesis" value="3"></el-option>
          <el-option label="Disertasi" value="4"></el-option>
          <el-option label="Kuliah kerja nyata" value="5"></el-option>
          <el-option label="Kerja praktek\/PKL" value="6"></el-option>
          <el-option label="Bimbingan akademis" value="7"></el-option>
          <el-option label="Aktivitas kemahasiswaan" value="10"></el-option>
          <el-option label="Program kreativitas mahasiswa" value="11"></el-option>
          <el-option label="Kompetisi" value="12"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Judul">
        <el-input type="textarea" v-model="setAktivitas.judul"></el-input>
      </el-form-item>
      <el-form-item label="Lokasi">
        <el-input v-model="setAktivitas.lokasi"></el-input>
      </el-form-item>
      <el-form-item label="Nomor SK Tugas">
        <el-input v-model="setAktivitas.sk_tugas"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal SK Tugas">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setAktivitas.tanggal_sk_tugas" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Jenis Anggota">
        <el-radio-group v-model="setAktivitas.jenis_anggota">
          <el-radio label="0">Personal</el-radio>
          <el-radio label="1">Kelompok</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Keterangan">
        <el-input type="textarea" v-model="setAktivitas.keterangan"></el-input>
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
    setAktivitas: {
      get() {
        return store.getters.updateaktivitas[0]
      },
      set(value) {
        store.commit('GET_LIST_AKTIVITAS_MAHASISWA', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.updateaktivitas[0])
      this.loading = true
      store.dispatch('UpdateAktivitasMahasiswa').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/aktivitas/listaktivitasmahasiswa')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

