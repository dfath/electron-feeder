import request from '@/utils/request'

export function getListMahasiswaLulusDO(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListMahasiswaLulusDO',
      token,
      'filter': '1=1 ORDER BY angkatan DESC, nim ASC',
      limit,
      offset
    }
  })
}
