import request from '@/utils/request'

export function getListKurikulum(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListKurikulum',
      token,
      'filter': '1=1 ORDER BY semester_mulai_berlaku DESC',
      limit,
      offset
    }
  })
}
