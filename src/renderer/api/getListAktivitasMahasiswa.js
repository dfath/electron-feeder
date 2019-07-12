import request from '@/utils/request'

export function getListAktivitasMahasiswa(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListAktivitasMahasiswa',
      token,
      'filter': '1=1 ORDER BY id_semester DESC',
      limit,
      offset
    }
  })
}
