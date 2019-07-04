import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    children: [
      {
        path: 'excel',
        name: 'Excel',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Excel', icon: 'table' }
      }
    ]
  },
  {
    path: '/profil',
    component: Layout,
    children: [
      {
        path: 'profil',
        name: 'Profil',
        component: () => import('@/views/profil/index'),
        meta: { title: 'Profil', icon: 'form' }
      }
    ]
  },
  {
    path: '/mahasiswa',
    component: Layout,
    children: [
      {
        path: 'mahasiswa',
        name: 'Mahasiswa',
        component: () => import('@/views/mahasiswa/index'),
        meta: { title: 'Mahasiswa', icon: 'user' }
      }
    ]
  },
  {
    path: '/dosen',
    component: Layout,
    redirect: '/dosen/dosen',
    name: 'Dosen',
    meta: { title: 'Dosen', icon: 'user' },
    children: [
      {
        path: 'dosen',
        name: 'Dosen',
        component: () => import('@/views/dosen/index'),
        meta: { title: 'Dosen', icon: 'user' }
      },
      {
        path: 'penugasan',
        name: 'Penugasan',
        component: () => import('@/views/penugasan/index'),
        meta: { title: 'Penugasan', icon: 'tree' }
      }
    ]
  },
  {
    path: '/perkuliahan',
    component: Layout,
    redirect: '/perkuliahan/matakuliah',
    name: 'Perkuliahan',
    meta: { title: 'Perkuliahan', icon: 'table' },
    children: [
      {
        path: 'matakuliah',
        name: 'Mata Kuliah',
        component: () => import('@/views/matakuliah/index'),
        meta: { title: 'Mata Kuliah', icon: 'eye' }
      },
      {
        path: 'kelaskuliah',
        name: 'Kelas Perkuliahan',
        component: () => import('@/views/kelaskuliah/index'),
        meta: { title: 'Kelas Perkuliahan', icon: 'password' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

