<template>
  <div style="text-align: center;" class="dashboard-container">
    <img style=" width: 100px; height: 100px;"  src="static/openfeederlogo.svg">
    <div class="dashboard-text">Selamat Datang di OpenFeeder v1.0.0</div>
    <p>Untuk panduan aplikasi ini, <a>lihat dokumentasi OpenFeeder</a>.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    margin-top: 1.5rem;
  }
}
</style>
