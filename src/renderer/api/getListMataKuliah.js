import request from '@/utils/request'

export function getListMataKuliah(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListMataKuliah',
      token,
      'filter': '1=1 ORDER BY kode_mata_kuliah DESC',
      limit,
      offset
    }
  })
}
