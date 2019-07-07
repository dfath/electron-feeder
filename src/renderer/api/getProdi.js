import request from '@/utils/request'

export function getProdi(token) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetProdi',
      token,
      'filter': '',
      'limit': 20,
      'offset': 0
    }
  })
}
