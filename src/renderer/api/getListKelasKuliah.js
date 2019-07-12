import request from '@/utils/request'

export function getListKelasKuliah(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListKelasKuliah',
      token,
      'filter': '1=1 ORDER BY kode_mata_kuliah DESC',
      limit,
      offset
    }
  })
}
