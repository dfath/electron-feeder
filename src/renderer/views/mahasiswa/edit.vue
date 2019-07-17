<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Nama Mahasiswa">
        <el-input v-model="setName.nama_mahasiswa"></el-input>
      </el-form-item>
      <el-form-item label="NIM">
        <el-input v-model="setNIM"></el-input>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-select v-model="setGender" placeholder="please select your gender">
          <el-option label="L" value="L"></el-option>
          <el-option label="P" value="P"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Nama Agama">
        <el-input v-model="setReligion"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setBirth" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Status">
        <el-radio-group v-model="setStatus">
          <el-radio label="AKTIF"></el-radio>
          <el-radio label="LULUS"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.desc"></el-input>
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
      this.$router.push('/mahasiswa/data')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

