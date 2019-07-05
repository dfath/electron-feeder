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
              <el-tab-pane label="Alamat" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="Informasi PT" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="Akta Pendirian" name="account">
                <account />
              </el-tab-pane>
              <el-tab-pane label="Program Studi" name="prodi">
                <prodi />
              </el-tab-pane>
              <el-tab-pane label="Periode Pelaporan Pengajuan" name="">
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
import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'
import Prodi from './components/Prodi'
export default {
  name: 'Profile',
  components: { UserCard, Activity, Timeline, Account, Prodi },
  data() {
    return {
      user: {},
      activeTab: 'activity'
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
