import request from '@/utils/request'

export function getWilayah(token, limit, offset, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetWilayah',
      token,
      filter,
      limit,
      offset
    }
  })
}
