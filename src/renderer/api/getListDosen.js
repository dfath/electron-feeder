import request from '@/utils/request'

export function getListDosen(token, limit, offset) {
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
      'filter': '1=1 ORDER BY nidn DESC',
      limit,
      offset
    }
  })
}
