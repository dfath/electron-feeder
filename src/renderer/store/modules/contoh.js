
import contohbiodatamahasiswa from './contohfile/contohbiodatamahasiswa'
import contohmatakuliah from './contohfile/contohmatakuliah'
import contohkurikulum from './contohfile/contohkurikulum'
import contohkelaskuliah from './contohfile/contohkelaskuliah'
import contohperkuliahan from './contohfile/contohperkuliahan'
import contohaktivitasmahasiswa from './contohfile/contohaktivitasmahasiswa'
import contohmahasiswalulusdo from './contohfile/contohmahasiswalulusdo'
import store from '@/store'

const contoh = {
  modules: {
    contohbiodatamahasiswa,
    contohmatakuliah,
    contohkurikulum,
    contohkelaskuliah,
    contohperkuliahan,
    contohaktivitasmahasiswa,
    contohmahasiswalulusdo
  },
  actions: {
    GetContoh() {
      let table = null
      const destination = store.getters.destination
      const dispatchdest = {
        'biodatamahasiswa': 'contohbiodatamahasiswa',
        'matakuliah': 'contohmatakuliah',
        'kurikulum': 'contohkurikulum',
        'kelaskuliah': 'contohkelaskuliah',
        'perkuliahanmahasiswa': 'contohperkuliahan',
        'aktivitas': 'contohaktivitasmahasiswa',
        'lulusdo': 'contohmahasiswalulusdo'
      }
      if (destination !== null) {
        console.log(destination)
        table = store.getters[dispatchdest[destination]]
        console.log(table)
      }
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = table.header
        const data = table.data
        console.log(tHeader)
        console.log(data)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'contoh-' + destination
        })
      })
    }
  }
}
export default contoh
