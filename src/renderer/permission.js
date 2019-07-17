import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

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
        '/matakuliah/insertmatakuliah': 'matakuliah',
        '/kurikulum/insertkurikulum': 'kurikulum',
        '/perkuliahan/insertmahasiswalulusdo': 'lulusdo',
        '/perkuliahan/insertaktivitasmahasiswa': 'aktivitas',
        '/perkuliahan/insertkelaskuliah': 'kelaskuliah'
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
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
