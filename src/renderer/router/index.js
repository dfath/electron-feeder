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
    path: '/profilpt',
    component: Layout,
    children: [
      {
        path: 'profilpt',
        name: 'Profil',
        component: () => import('@/views/profilpt/index'),
        meta: { title: 'Profil', icon: 'clipboard' }
      }
    ]
  },

  {
    path: '/mahasiswa',
    component: Layout,
    redirect: '/mahasiswa/data',
    name: 'Mahasiswa',
    meta: { title: 'Mahasiswa', icon: 'user' },
    children: [
      {
        path: 'data',
        name: 'Data Mahasiswa',
        component: () => import('@/views/mahasiswa/index'),
        meta: { title: ' Data Mahasiswa', icon: 'peoples' }
      },
      {
        path: 'upload',
        name: 'Upload Biodata Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: ' Upload Biodata', icon: 'excel' }
      },
      {
        path: 'edit',
        name: 'Edit Mahasiswa',
        hidden: true,
        component: () => import('@/views/mahasiswa/edit'),
        meta: { title: 'Edit Biodata Mahasiswa', icon: 'form' }
      },
      {
        path: 'riwayatpendidikan',
        name: 'Upload Riwayat Pendidikan Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: ' Upload Riwayat Pendidikan', icon: 'excel' }
      },
      {
        path: 'prestasimahasiswa',
        name: 'Upload Prestasi Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: ' Upload Prestasi Mahasiswa', icon: 'excel' }
      }
    ]
  },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'excel',
  //       name: 'Upload Mahasiswa',
  //       component: () => import('@/views/excel/index'),
  //       meta: { title: 'Excel', icon: 'table' }
  //     }
  //   ]
  // },

  {
    path: '/dosen',
    component: Layout,
    redirect: '/dosen/listdosen',
    name: 'Dosen',
    meta: { title: 'Dosen', icon: 'user' },
    children: [
      {
        path: 'listdosen',
        name: 'List Dosen',
        component: () => import('@/views/dosen/index'),
        meta: { title: 'List Dosen', icon: 'user' }
      },
      {
        path: 'listpenugasan',
        name: 'List Penugasan Dosen',
        component: () => import('@/views/penugasan/index'),
        meta: { title: 'List Penugasan Dosen', icon: 'tree' }
      },
      {
        path: 'insertdosenpengajarkelaskuliah',
        name: 'Upload Dosen Pengajar Kelas Kuliah',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Dosen Pengajar Kelas Kuliah', icon: 'excel' }
      }
    ]
  },
  {
    path: '/matakuliah',
    component: Layout,
    redirect: '/matakuliah/listmatakuliah',
    name: 'Mata Kuliah',
    meta: { title: 'Mata Kuliah', icon: 'eye' },
    children: [
      {
        path: 'listmatakuliah',
        name: 'List Mata Kuliah',
        component: () => import('@/views/matakuliah/index'),
        meta: { title: 'List Mata Kuliah', icon: 'eye' }
      },
      {
        path: 'insertmatakuliah',
        name: 'Upload Mata Kuliah',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Mata Kuliah', icon: 'excel' }
      },
      {
        path: 'edit',
        name: 'Edit Mata Kuliah',
        hidden: true,
        component: () => import('@/views/matakuliah/edit'),
        meta: { title: 'Edit Mata Kuliah', icon: 'form' }
      },
      {
        path: 'substansikuliah',
        name: 'Substansi Kuliah',
        component: () => import('@/views/substansikuliah/index'),
        meta: { title: 'Substansi Kuliah', icon: 'eye-open' }
      }
    ]
  },
  {
    path: '/kurikulum',
    component: Layout,
    redirect: '/kurikulum/listkurikulum',
    name: 'Kurikulum',
    meta: { title: 'Kurikulum', icon: 'table' },
    children: [
      {
        path: 'listkurikulum',
        name: 'List Kurikulum',
        component: () => import('@/views/kurikulum/index'),
        meta: { title: 'List Kurikulum', icon: 'documentation' }
      },
      {
        path: 'insertkurikulum',
        name: 'Upload Kurikulum',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Kurikulum', icon: 'excel' }
      },
      {
        path: 'edit',
        name: 'Edit Kurikulum',
        hidden: true,
        component: () => import('@/views/kurikulum/edit'),
        meta: { title: 'Edit Kurikulum', icon: 'form' }
      },
      {
        path: 'insertmatkulkurikulum',
        name: 'Upload Matkul Kurikulum',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Matkul Kurikulum', icon: 'excel' }
      }
    ]
  },
  {
    path: '/kelaskuliah',
    component: Layout,
    redirect: '/kelaskuliah/listkelaskuliah',
    name: 'Kelas',
    meta: { title: 'Kelas', icon: 'table' },
    children: [
      {
        path: 'listkelaskuliah',
        name: 'List Kelas Perkuliahan',
        component: () => import('@/views/kelaskuliah/index'),
        meta: { title: 'List Kelas Perkuliahan', icon: 'peoples' }
      },
      {
        path: 'insertkelaskuliah',
        name: 'Upload Kelas Kuliah',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Kelas Kuliah', icon: 'excel' }
      },
      {
        path: 'edit',
        name: 'Edit Kelas Kuliah',
        hidden: true,
        component: () => import('@/views/kelaskuliah/edit'),
        meta: { title: 'Edit Kelas Kuliah', icon: 'form' }
      },
      {
        path: 'insertpesertakelaskuliah',
        name: 'Inserta Peserta Kelas Kuliah',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Peserta Kelas Kuliah', icon: 'excel' }
      }
    ]
  },

  {
    path: '/perkuliahan',
    component: Layout,
    redirect: '/perkuliahan/nilaikuliah',
    name: 'Perkuliahan',
    meta: { title: 'Perkuliahan', icon: 'education' },
    children: [
      {
        path: 'nilaikuliah',
        name: 'List Nilai Perkuliahan',
        component: () => import('@/views/nilaikuliah/index'),
        meta: { title: 'List Nilai Perkuliahan', icon: 'chart' }
      },
      {
        path: 'edit',
        name: 'Edit Nilai Perkuliahan',
        hidden: true,
        component: () => import('@/views/nilaikuliah/edit'),
        meta: { title: 'Edit Nilai Perkuliahan', icon: 'form' }
      },
      {
        path: 'aktivitaskuliah',
        name: 'Aktivitas Kuliah Mahasiswa',
        component: () => import('@/views/aktivitaskuliah/index'),
        meta: { title: 'Aktivitas Kuliah Mahasiswa', icon: 'skill' }
      },
      {
        path: 'insertperkuliahanmahasiswa',
        name: 'Upload Aktivitas Kuliah Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Aktivitas Kuliah Mahasiswa', icon: 'excel' }
      }
      // {
      //   path: 'edit',
      //   name: 'Edit Aktivitas Kuliah Mahasiswa',
      //   hidden: true,
      //   component: () => import('@/views/aktivitaskuliah/edit'),
      //   meta: { title: 'Edit Aktivitas Kuliah Mahasiswa', icon: 'form' }
      // }
      // {
      //   path: 'hitungaktivitaskuliah',
      //   name: 'Hitung Aktivitas Perkuliahan Mahasiswa',
      //   component: () => import('@/views/matakuliah/index'),
      //   meta: { title: 'Hitung Aktivitas Perkuliahan Mahasiswa', icon: 'money' }
      // }
      // {
      //   path: 'ta',
      //   name: 'Tugas Akhir/Skripsi/Tesis/Disertasi Mahasiswa',
      //   component: () => import('@/views/tugasakhir/index'),
      //   meta: { title: 'Tugas Akhir/Skripsi/Tesis/Disertasi Mahasiswa', icon: 'theme' }
      // }
    ]
  },
  {
    path: '/aktivitas',
    component: Layout,
    redirect: '/aktivitas/listaktivitasmahasiswa',
    name: 'Aktivitas',
    meta: { title: 'Aktivitas', icon: 'skill' },
    children: [
      {
        path: 'listaktivitasmahasiswa',
        name: 'List Aktivitas Mahasiswa',
        component: () => import('@/views/aktivitas/index'),
        meta: { title: 'List Aktivitas Mahasiswa', icon: 'skill' }
      },
      {
        path: 'insertaktivitasmahasiswa',
        name: 'Upload Aktivitas Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Aktivitas Mahasiswa', icon: 'excel' }
      },
      {
        path: 'edit',
        name: 'Edit Aktivitas Mahasiswa',
        hidden: true,
        component: () => import('@/views/aktivitas/edit'),
        meta: { title: 'Edit Aktivitas Mahasiswa', icon: 'form' }
      },
      // {
      //   path: 'listanggotaaktivitasmahasiswa',
      //   name: 'List Anggota Aktivitas Mahasiswa',
      //   component: () => import('@/views/aktivitas/index'), // perlu diganti nanti jangan lupa
      //   meta: { title: 'List Anggota Aktivitas Mahasiswa', icon: 'skill' }
      // },
      {
        path: 'insertanggotaaktivitasmahasiswa',
        name: 'Upload Anggota Aktivitas Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Anggota Aktivitas Mahasiswa', icon: 'excel' }
      },
      {
        path: 'insertbimbingmahasiswa',
        name: 'Upload Bimbing Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Bimbing Mahasiswa', icon: 'excel' }
      },
      {
        path: 'insertujimahasiswa',
        name: 'Upload Uji Mahasiswa',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Uji Mahasiswa', icon: 'excel' }
      }
    ]
  },
  {
    path: '/lulusdo',
    component: Layout,
    redirect: '/lulusdo/listlulusdo',
    name: 'Lulus/Drop Out',
    meta: { title: 'Lulus/Drop Out', icon: 'education' },
    children: [
      {
        path: 'listlulusdo',
        name: 'Daftar Mahasiswa Lulus/Drop Out',
        component: () => import('@/views/lulusdo/index'),
        meta: { title: 'Daftar Mahasiswa Lulus/Drop Out', icon: 'list' }
      },
      {
        path: 'insertmahasiswalulusdo',
        name: 'Upload Mahasiswa Lulus/Drop Out',
        component: () => import('@/views/excel/index'),
        meta: { title: 'Upload Mahasiswa Lulus/Drop Out', icon: 'excel' }
      },
      {
        path: 'edit',
        name: 'Edit Mahasiswa Lulus/Drop Out',
        hidden: true,
        component: () => import('@/views/lulusdo/edit'),
        meta: { title: 'Edit Mahasiswa Lulus/Drop Out', icon: 'form' }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/uploadmahasiswa',
    name: 'Guide',
    meta: { title: 'Guide', icon: 'table' },
    children: [
      {
        path: 'uploadmahasiswa',
        name: 'Guide Upload Mahasiswa',
        component: () => import('@/views/guide/index'),
        meta: { title: 'Guide Upload Mahasiswa', icon: 'message' }
      },
      {
        path: 'uploadlain',
        name: 'Guide Upload Lain',
        hidden: true,
        component: () => import('@/views/guide/index'),
        meta: { title: 'Guide Upload Lain', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

