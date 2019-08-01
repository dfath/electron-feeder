import request from '@/utils/request'

export function getPesertaKelasKuliah(token, id_kelas_kuliah) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetPesertaKelasKuliah',
      token,
      'filter': `id_kelas_kuliah = '${id_kelas_kuliah}'`,
      'limit': '',
      'offset': 0
    }
  })
}
