import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
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
        if (to.path === '/perkuliahan/insertmatakuliah') {
          store.dispatch('SetDestination', 'matakuliah')
          console.log(store.getters.destination)
        } else {
          if (to.path === '/perkuliahan/insertkurikulum') {
            store.dispatch('SetDestination', 'kurikulum')
            console.log(store.getters.destination)
          }
        }
      }
      next()
    }
  } else {
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
