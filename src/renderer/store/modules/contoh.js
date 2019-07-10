
import contohbiodatamahasiswa from './contohfile/contohbiodatamahasiswa'
import store from '@/store'

const contoh = {
  modules: {
    contohbiodatamahasiswa
  },
  actions: {
    GetContoh() {
      const destination = store.getters.destination
      let table = null
      if (destination === 'biodatamahasiswa') {
        table = store.getters.contohbiodatamahasiswa
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
