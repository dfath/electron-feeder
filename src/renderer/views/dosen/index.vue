<template>
  <div class="app-container">
    <el-table border :data="tableDosen" height="570" style="width: 100%">
      <!-- <el-table-column min-width="50" type="index" label="No."></el-table-column> -->
      <el-table-column min-width="250" prop="nama_dosen"
                      label="Nama">
      </el-table-column>
      <el-table-column min-width="100" prop="nidn"
                      label="NIDN/NUP/NIDK">
      </el-table-column>
      <el-table-column min-width="150" prop="nip"
                      label="NIP">
      </el-table-column>
      <el-table-column min-width="50" prop="jenis_kelamin"
                      label="L/P">
      </el-table-column>
      <el-table-column min-width="100" prop="nama_agama"
                      label="Agama">
      </el-table-column>
      <el-table-column min-width="100" prop="tanggal_lahir"
                      label="Tanggal Lahir">
      </el-table-column>
      <el-table-column min-width="100" prop="nama_status_aktif"
                      label="Status">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listLoading: true,
      tableDosen: []
    }
  },
  created() {
    this.getListDosen()
  },
  methods: {
    getListDosen() {
      this.listLoading = true
<<<<<<< Updated upstream
      getList(this.listQuery).then(response => {
        this.list = null
=======
      this.$store.dispatch('GetListDosen').then(() => {
        this.listLoading = true
        this.tableDosen = this.$store.getters.dosen
        console.log(this.$store.getters.dosen)

        // ListDosen
        console.log(this.tableDosen)
      }).catch(() => {
>>>>>>> Stashed changes
        this.listLoading = false
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
