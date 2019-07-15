<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="7" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="16" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Alamat" name="alamat">
                <alamat />
              </el-tab-pane>
              <el-tab-pane label="Informasi PT" name="info">
                <info />
              </el-tab-pane>
              <el-tab-pane label="Akta Pendirian" name="akta">
                <akta />
              </el-tab-pane>
              <el-tab-pane label="Program Studi" name="prodi">
                <prodi />
              </el-tab-pane>
              <el-tab-pane label="Periode Pelaporan Pengajuan" name="pelaporan">
                <pelaporan />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Alamat from './components/Alamat'
import Info from './components/Info'
import Akta from './components/Akta'
import Prodi from './components/Prodi'
import Pelaporan from './components/Pelaporan'
export default {
  name: 'Profile',
  components: { UserCard, Alamat, Info, Akta, Prodi, Pelaporan },
  data() {
    return {
      user: {},
      activeTab: 'alamat'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>
