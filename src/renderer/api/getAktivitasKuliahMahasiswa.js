import request from '@/utils/request'

export function getAktivitasKuliahMahasiswa(token, limit, offset) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetAktivitasKuliahMahasiswa',
      token,
      'filter': '1=1 ORDER BY id_semester DESC, nim ASC',
      limit,
      offset
    }
  })
}
