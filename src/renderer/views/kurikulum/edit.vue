<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Nama Kurikulum">
        <el-input v-model="setKurikulum.nama_kurikulum"></el-input>
      </el-form-item>
      <el-form-item label="Program Studi">
        <el-select v-model="setKurikulum.id_prodi" placeholder="Please select your program studi pengampu">
          <el-option label="D3 Farmasi" value="92992de3-c887-46d5-804d-c4dbec7c553a"></el-option>
          <el-option label="S1 Farmasi" value="02771288-85aa-4ded-ad39-cadfb8760861"></el-option>
          <el-option label="Profesi Profesi Apoteker" value="123904d9-a75c-45a8-8141-fc655ba0c486"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Mulai Berlaku">
        <el-select v-model="setKurikulum.semester_mulai_berlaku" placeholder="Please select your semester">
          <el-option label="2019/2020 Ganjil" value="2019\/2020 Ganjil"></el-option>
          <el-option label="2018/2019 Genap" value="2018\/2019 Genap"></el-option>
          <el-option label="2018/2019 Ganjil" value="2018\/2019 Ganjil"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Jumlah sks">
        <el-input v-model="setKurikulum.jumlah_sks_lulus"></el-input>
      </el-form-item>
      <el-form-item label="Jumlah Bobot Matakuliah Wajib">
        <el-input v-model="setKurikulum.jumlah_sks_wajib"></el-input> sks
      </el-form-item>
      <el-form-item label="Jumlah Bobot Matakuliah Pilihan">
        <el-input v-model="setKurikulum.jumlah_sks_pilihan"></el-input> sks
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

    }
  },
  computed: {
    setKurikulum: {
      get() {
        return store.getters.updatekurikulum[0]
      },
      set(value) {
        store.commit('GET_DETAIL_KURIKULUM', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.updatekurikulum[0])
      this.loading = true
      store.dispatch('UpdateKurikulum').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/kurikulum/listkurikulum')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

