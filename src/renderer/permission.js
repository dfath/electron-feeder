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
      if (to.path === '/mahasiswa/upload') {
        store.dispatch('SetDestination', 'biodatamahasiswa')
        console.log(store.getters.destination)
      } else {
        if (to.path === '/matakuliah/insertmatakuliah') {
          store.dispatch('SetDestination', 'matakuliah')
          console.log(store.getters.destination)
        } else {
          if (to.path === '/kurikulum/insertkurikulum') {
            store.dispatch('SetDestination', 'kurikulum')
            console.log(store.getters.destination)
          } else {
            if (to.path === '/perkuliahan/insertmahasiswalulusdo') {
              store.dispatch('SetDestination', 'lulusdo')
              console.log(store.getters.destination)
            } else {
              if (to.path === '/perkuliahan/insertaktivitasmahasiswa') {
                store.dispatch('SetDestination', 'aktivitas')
                console.log(store.getters.destination)
              } else {
                if (to.path === '/perkuliahan/insertkelaskuliah') {
                  store.dispatch('SetDestination', 'kelaskuliah')
                  console.log(store.getters.destination)
                }
              }
            }
          }
        }
      }
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
