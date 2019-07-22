import request from '@/utils/request'

export function insertNilaiPerkuliahan(token, key, record) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'UpdateNilaiPerkuliahanKelas',
      token,
      key,
      record
    }
  })
}
