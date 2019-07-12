import request from '@/utils/request'

export function getListPenugasanSemuaDosen(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListPenugasanSemuaDosen',
      token,
      'filter': '1=1 ORDER BY id_tahun_ajaran DESC',
      limit,
      offset
    }
  })
}
