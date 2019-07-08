import request from '@/utils/request'

export function getListMahasiswa(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListMahasiswa',
      token,
      'filter': '1=1 ORDER BY id_periode DESC, nim ASC',
      limit,
      offset
    }
  })
}
