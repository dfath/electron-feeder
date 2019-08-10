import request from '@/utils/request'

export function getJenisPrestasi(token, filter) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetJenisPrestasi',
      token,
      filter,
      'limit': '',
      'offset': 0
    }
  })
}
