import request from '@/utils/request'

export function getNegara(token, limit, offset, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetNegara',
      token,
      filter,
      limit,
      offset
    }
  })
}
