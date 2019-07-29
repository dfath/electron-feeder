import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log('ini dari', from.path)
  if (store.getters.token) {
    console.log('ada token', to.path)
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      const dispatchdest = {
        '/mahasiswa/upload': 'biodatamahasiswa',
        '/mahasiswa/riwayatpendidikan': 'riwayatpendidikan',
        '/mahasiswa/prestasimahasiswa': 'prestasimahasiswa',
        '/matakuliah/insertmatakuliah': 'matakuliah',
        '/kurikulum/insertkurikulum': 'kurikulum',
        '/kurikulum/insertmatkulkurikulum': 'matkulkurikulum',
        '/kelaskuliah/insertkelaskuliah': 'kelaskuliah',
        '/kelaskuliah/insertpesertakelaskuliah': 'pesertakelaskuliah',
        '/dosen/insertdosenpengajarkelaskuliah': 'dosenpengajarkelaskuliah',
        '/perkuliahan/insertperkuliahanmahasiswa': 'perkuliahanmahasiswa',
        '/aktivitas/insertaktivitasmahasiswa': 'aktivitas',
        '/aktivitas/insertanggotaaktivitasmahasiswa': 'anggotaaktivitas',
        '/aktivitas/insertbimbingmahasiswa': 'bimbing',
        '/aktivitas/insertujimahasiswa': 'uji',
        '/lulusdo/insertmahasiswalulusdo': 'lulusdo'
      }
      store.dispatch('SetDestination', dispatchdest[to.path])
      next()
    }
  } else {
    if (from.path !== '/') {
      store.dispatch('SetFromPath', from.path)
    }
    if (whiteList.indexOf(to.path) !== -1) {
      next()
      setTimeout(() => {
        Message({
          message: 'Token Anda sudah hampir expired silahkan logout dan login ulang untuk mencegah error',
          type: 'warning',
          duration: 5 * 1000
        })
      }, 2700000)
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
