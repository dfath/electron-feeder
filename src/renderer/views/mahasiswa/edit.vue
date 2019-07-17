<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Nama">
        <el-input v-model="setName.nama_mahasiswa"></el-input>
      </el-form-item>
      <el-form-item label="Tempat Lahir">
        <el-input v-model="setName.tempat_lahir"></el-input>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-radio-group v-model="setName.jenis_kelamin">
          <el-radio label="L"></el-radio>
          <el-radio label="P"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Nama Ibu">
        <el-input v-model="setName.nama_ibu"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setName.tanggal_lahir" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Agama">
        <el-select v-model="setName.nama_agama" placeholder="Please select your religion">
          <el-option label="Islam" value="Islam"></el-option>
          <el-option label="Kristen" value="Kristen"></el-option>
          <el-option label="Katholik" value="Katholik"></el-option>
          <el-option label="Hindu" value="Hindu"></el-option>
          <el-option label="Budha" value="Budha"></el-option>
          <el-option label="Konghucu" value="Konghucu"></el-option>
          <el-option label="Lainnya" value="Lainnya"></el-option>
        </el-select>
      </el-form-item>

      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-location" /> Alamat</span>
          Alamat

          <el-form inline="true" ref="form" :model="form" label-width="120px" v-loading="loading">
            <el-form-item label="NIK">
              <el-input v-model="setName.nik"></el-input>
            </el-form-item>
            <el-form-item label="NISN">
              <el-input v-model="setName.nisn"></el-input>
            </el-form-item>
            <el-form-item label="NPWP">
              <el-input v-model="setName.npwp"></el-input>
            </el-form-item>
            <el-form-item label="Kewarganegaraan">
              <el-input v-model="setName.kewarganegaraan"></el-input>
            </el-form-item>
            <el-form-item label="Jalan">
              <el-input v-model="setName.jalan"></el-input>
            </el-form-item>
            <el-form-item label="Dusun">
              <el-input v-model="setName.dusun"></el-input>
            </el-form-item>
            <el-form-item label="RT">
              <el-input v-model="setName.rt"></el-input>
            </el-form-item>
            <el-form-item label="RW">
              <el-input v-model="setName.rw"></el-input>
            </el-form-item>
            <el-form-item label="Kelurahan">
              <el-input v-model="setName.kelurahan"></el-input>
            </el-form-item>
            <el-form-item label="Kodepos">
              <el-input v-model="setName.kode_pos"></el-input>
            </el-form-item>
            <el-form-item label="Kecamatan">
              <el-input v-model="setName.nama_wilayah"></el-input>
            </el-form-item>

            <el-form-item label="Jenis Tinggal">
              <el-select v-model="setName.nama_jenis_tinggal" placeholder="Pilih Jenis Tinggal">
                <el-option label="Bersama orang tua" value="Bersama orang tua"></el-option>
                <el-option label="Wali" value="Wali"></el-option>
                <el-option label="Kost" value="Kost"></el-option>
                <el-option label="Asrama" value="Asrama"></el-option>
                <el-option label="Panti asuhan" value="Panti asuhan"></el-option>
                <el-option label="Lainnya" value="Lainnya"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Alat Transportasi">
              <el-select v-model="setName.nama_alat_transportasi" placeholder="Pilih Alat Transportasi">
                <el-option label="Jalan kaki" value="Jalan kaki"></el-option>
                <el-option label="Angkutan umum/bus/pete-pete" value="Angkutan umum/bus/pete-pete"></el-option>
                <el-option label="Mobil/bus antar jemput" value="Mobil/bus antar jemput"></el-option>
                <el-option label="Kereta api" value="Kereta api"></el-option>
                <el-option label="Ojek" value="Ojek"></el-option>
                <el-option label="Andong/bendi/sado/dokar/delman/becak" value="Andong/bendi/sado/dokar/delman/becak"></el-option>
                <el-option label="Perahu penyeberangan/rakit/getek" value="Perahu penyeberangan/rakit/getek"></el-option>
                <el-option label="Kuda" value="Kuda"></el-option>
                <el-option label="Sepeda" value="Sepeda"></el-option>
                <el-option label="Sepeda motor" value="Sepeda motor"></el-option>
                <el-option label="Mobil pribadi" value="Mobil pribadi"></el-option>
                <el-option label="Lainnya" value="Lainnya"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">Update</el-button>
              <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>

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
      loading: false
    }
  },
  computed: {
    setName: {
      get() {
        return store.getters.editbiodatamahasiswa[0]
      },
      set(value) {
        store.commit('GET_BIODATA_MAHASISWA', value)
      }
    }
    // setGender() {
    //   return store.getters.editbiodatamahasiswa[0].jenis_kelamin
    // },
    // setReligion() {
    //   return store.getters.editbiodatamahasiswa[0].nama_agama
    // },
    // setBirth() {
    //   return store.getters.editbiodatamahasiswa[0].tanggal_lahir
    // },
    // setProdi() {
    //   return store.getters.editbiodatamahasiswa[0].nama_program_studi
    // },
    // setStatus() {
    //   return store.getters.editbiodatamahasiswa[0].nama_status_mahasiswa
    // },
    // setPeriode() {
    //   return store.getters.editbiodatamahasiswa[0].nama_periode_masuk
    // }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.editbiodatamahasiswa[0])
      this.loading = true
      store.dispatch('EditBiodataMahasiswa').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

