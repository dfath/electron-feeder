import request from '@/utils/request'

export function getListDosen(token) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListDosen',
      token,
      'filter': '',
      'limit': 100,
      'offset': 0
    }
  })
}
