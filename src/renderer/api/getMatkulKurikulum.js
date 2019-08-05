import request from '@/utils/request'

export function getMatkulKurikulum(token, id_kurikulum) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetMatkulKurikulum',
      token,
      'filter': `id_kurikulum = '${id_kurikulum}'`,
      'limit': '',
      'offset': 0
    }
  })
}
